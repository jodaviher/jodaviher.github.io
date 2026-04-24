// ============================================================
//  TipsterAI Pro - Lógica Principal de la Mini App
//  Flujo: Continentes → Ligas → Partidos → Análisis
// ============================================================

const AppState = {
  selectedContinent: null,  // string: "Europa", "Sudamérica", etc.
  selectedLeague:    null,  // { id, nombre, continente }
  selectedFixture:   null,  // { fixture_id, local, visitante }
  isLoading:         false,
};

// ── Inicializar al cargar el DOM ─────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initTelegramWebApp();
  initContinentsScreen();
  checkBackendStatus();
});

// ── Telegram Mini App SDK ────────────────────────────────────
function initTelegramWebApp() {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }
}

// ── Health check ─────────────────────────────────────────────
async function checkBackendStatus() {
  try {
    await Api.getStatus();
  } catch {
    console.warn("[App] Backend no disponible");
  }
}

// ============================================================
//  PANTALLA 1: CONTINENTES
// ============================================================
function initContinentsScreen() {
  UI.renderContinents("continents-grid");

  document.getElementById("continents-grid")
    ?.addEventListener("click", (e) => {
      const card = e.target.closest(".continent-card");
      if (!card) return;

      AppState.selectedContinent = card.dataset.continent;
      AppState.selectedLeague    = null;
      AppState.selectedFixture   = null;

      initLeaguesScreen(AppState.selectedContinent);
      UI.showScreen("screen-leagues");
    });
}

// ============================================================
//  PANTALLA 2: LIGAS DEL CONTINENTE
// ============================================================
function initLeaguesScreen(continente) {
  const ligasDelContinente = LIGAS.filter(
    (l) => l.continente === continente
  );

  // Título
  const titleEl = document.getElementById("leagues-continent-name");
  if (titleEl) titleEl.textContent = continente;

  // Renderizar grid de ligas filtradas
  UI.renderLeagues("leagues-grid", ligasDelContinente);

  // Limpiar listeners anteriores clonando el contenedor
  const grid = document.getElementById("leagues-grid");
  const newGrid = grid.cloneNode(true);
  grid.parentNode.replaceChild(newGrid, grid);

  // Evento: seleccionar liga
  document.getElementById("leagues-grid")
    ?.addEventListener("click", (e) => {
      const card = e.target.closest(".league-card");
      if (!card) return;

      const leagueId     = parseInt(card.dataset.leagueId);
      const leagueNombre = card.dataset.leagueNombre;

      const ligaData = LIGAS.find((l) => l.id === leagueId);
      AppState.selectedLeague = {
        id:         leagueId,
        nombre:     leagueNombre,
        continente: continente,
        temporada:  ligaData?.temporada || null,
      };

      UI.selectLeague(leagueId);

      // Habilitar botón de liga específica
      const btnLiga = document.getElementById("btn-upcoming-league");
      if (btnLiga) {
        btnLiga.disabled    = false;
        btnLiga.textContent = `⚽ Partidos de ${leagueNombre}`;
      }
    });

  // Evento: ver partidos de la liga seleccionada
  document.getElementById("btn-upcoming-league")
    ?.addEventListener("click", async () => {
      if (!AppState.selectedLeague) return;
      await loadFixturesByLeague(AppState.selectedLeague.id);
    });

  // Evento: ver todos los partidos del continente
  document.getElementById("btn-upcoming-continent")
    ?.addEventListener("click", async () => {
      await loadFixturesByContinent(continente);
    });

  // Evento: botón volver a continentes
  document.getElementById("btn-back-continents")
    ?.addEventListener("click", () => {
      AppState.selectedLeague  = null;
      AppState.selectedFixture = null;
      UI.showScreen("screen-continents");
    });
}

// ============================================================
//  CARGAR PARTIDOS: por liga específica
// ============================================================
async function loadFixturesByLeague(leagueId) {
  if (AppState.isLoading) return;
  AppState.isLoading = true;

  const btnLiga = document.getElementById("btn-upcoming-league");
  UI.setButtonState("btn-upcoming-league", false, "Cargando...");

  try {
    const season = AppState.selectedLeague?.temporada || null;
    const data = await Api.getUpcomingFixtures(leagueId, 10, season);

    if (!data.success || !data.grupos) {
      UI.showToast("No hay partidos disponibles para esta liga.");
      return;
    }

    initFixturesScreen(data, "liga");
    UI.showScreen("screen-fixtures");

  } catch (err) {
    UI.showToast(err.message || "Error conectando con el servidor.");
  } finally {
    AppState.isLoading = false;
    UI.setButtonState(
      "btn-upcoming-league",
      !!AppState.selectedLeague,
      AppState.selectedLeague
        ? `⚽ Partidos de ${AppState.selectedLeague.nombre}`
        : "⚽ Ver partidos de la liga"
    );
  }
}

// ============================================================
//  CARGAR PARTIDOS: todos los del continente en paralelo
// ============================================================
async function loadFixturesByContinent(continente) {
  if (AppState.isLoading) return;
  AppState.isLoading = true;

  UI.setButtonState("btn-upcoming-continent", false, "Cargando...");

  try {
    const ligasDelContinente = LIGAS.filter(
      (l) => l.continente === continente
    );

    // Consultar todas las ligas en paralelo
    const resultados = await Promise.allSettled(
      ligasDelContinente.map((liga) =>
        Api.getUpcomingFixtures(liga.id, 10, liga.temporada || null)
          .then((data) => ({ ...data, league_id: liga.id }))
      )
    );

    // Consolidar partidos de todas las ligas en un solo objeto
    const gruposConsolidados = {};

    resultados.forEach((resultado, index) => {
      if (resultado.status !== "fulfilled") return;
      const data = resultado.value;
      if (!data.success || !data.grupos) return;

      const nombreLiga = ligasDelContinente[index].nombre;

      // Agregar nombre de liga a cada partido y mezclar en grupos por fecha
      Object.entries(data.grupos).forEach(([fechaKey, grupo]) => {
        if (!gruposConsolidados[fechaKey]) {
          gruposConsolidados[fechaKey] = {
            label:    grupo.label,
            partidos: [],
          };
        }
        // Agregar nombre de liga a cada partido
        const partidosConLiga = grupo.partidos.map((p) => ({
          ...p,
          liga_nombre: nombreLiga,
        }));
        gruposConsolidados[fechaKey].partidos.push(...partidosConLiga);
      });
    });

    if (Object.keys(gruposConsolidados).length === 0) {
      UI.showToast("No hay partidos próximos en este continente.");
      return;
    }

    const dataConsolidada = {
      success:        true,
      league_nombre:  continente,
      total:          Object.values(gruposConsolidados)
                        .reduce((acc, g) => acc + g.partidos.length, 0),
      grupos:         gruposConsolidados,
      es_continente:  true,
    };

    initFixturesScreen(dataConsolidada, "continente");
    UI.showScreen("screen-fixtures");

  } catch (err) {
    UI.showToast(err.message || "Error cargando partidos del continente.");
  } finally {
    AppState.isLoading = false;
    UI.setButtonState(
      "btn-upcoming-continent",
      true,
      `🌍 Todos los partidos de ${continente}`
    );
  }
}

// ============================================================
//  PANTALLA 3: PARTIDOS
// ============================================================
function initFixturesScreen(data, origen) {
  const titleEl = document.getElementById("fixtures-league-name");
  if (titleEl) titleEl.textContent = data.league_nombre || "";

  // Subtítulo según origen
  const subtitleEl = document.getElementById("fixtures-subtitle");
  if (subtitleEl) {
    subtitleEl.textContent = origen === "continente"
      ? "Todos los próximos partidos del continente"
      : "Toca un partido para seleccionarlo";
  }

  UI.renderFixtures("fixtures-list", data.grupos, data.es_continente);

  AppState.selectedFixture = null;
  UI.hideSelectionPanel("selection-panel");

  // Limpiar listeners clonando el contenedor
  const list = document.getElementById("fixtures-list");
  const newList = list.cloneNode(true);
  list.parentNode.replaceChild(newList, list);

  // Evento: seleccionar partido
  document.getElementById("fixtures-list")
    ?.addEventListener("click", (e) => {
      const card = e.target.closest(".fixture-card");
      if (!card) return;

      const fixtureId  = parseInt(card.dataset.fixtureId);
      const local      = card.dataset.local;
      const visitante  = card.dataset.visitante;
      const leagueId   = parseInt(card.dataset.leagueId);

      if (AppState.selectedFixture?.fixture_id === fixtureId) {
        AppState.selectedFixture = null;
        UI.selectFixture(null);
        UI.hideSelectionPanel("selection-panel");
        return;
      }

      AppState.selectedFixture = {
        fixture_id: fixtureId,
        local,
        visitante,
        league_id: leagueId,
      };

      UI.selectFixture(fixtureId);
      UI.showSelectionPanel("selection-panel", { local, visitante });
      bindSelectionPanelEvents();

      setTimeout(() => {
        document.getElementById("selection-panel")?.scrollIntoView({
          behavior: "smooth",
          block:    "nearest",
        });
      }, 100);
    });

  // Evento: volver a ligas
  const btnBack = document.getElementById("btn-back-leagues");
  const newBtnBack = btnBack?.cloneNode(true);
  if (btnBack && newBtnBack) {
    btnBack.parentNode.replaceChild(newBtnBack, btnBack);
    newBtnBack.addEventListener("click", () => {
      AppState.selectedFixture = null;
      UI.hideSelectionPanel("selection-panel");
      UI.showScreen("screen-leagues");
    });
  }
}

// ============================================================
//  PANEL DE CONFIRMACIÓN
// ============================================================
function bindSelectionPanelEvents() {
  document.getElementById("btn-analyze")
    ?.addEventListener("click", async () => {
      if (!AppState.selectedFixture) return;
      await runAnalysis();
    });

  document.getElementById("btn-deselect")
    ?.addEventListener("click", () => {
      AppState.selectedFixture = null;
      document.querySelectorAll(".fixture-card")
        .forEach((c) => c.classList.remove("selected"));
      UI.hideSelectionPanel("selection-panel");
    });
}

// ============================================================
//  ANÁLISIS
// ============================================================
async function runAnalysis() {
  if (AppState.isLoading) return;
  if (!AppState.selectedFixture) return;

  AppState.isLoading = true;

  const { fixture_id, local, visitante, league_id } = AppState.selectedFixture;

  UI.showScreen("screen-loading");
  UI.showLoadingScreen("screen-loading");

  try {
    const ligaData = LIGAS.find((l) => l.id === league_id);
    const season   = ligaData?.temporada || null;
    const result   = await Api.analyzeMatch(fixture_id, league_id, season);

    if (!result.success) throw new Error(result.error || "Error en el análisis");

    UI.showScreen("screen-result");
    UI.showSuccessScreen("screen-result", { local, visitante });

    document.getElementById("btn-new-analysis")
      ?.addEventListener("click", () => resetApp());

  } catch (err) {
    UI.showScreen("screen-fixtures");
    UI.showToast(err.message || "Error generando el análisis.");
  } finally {
    AppState.isLoading = false;
  }
}

// ============================================================
//  RESET
// ============================================================
function resetApp() {
  AppState.selectedContinent = null;
  AppState.selectedLeague    = null;
  AppState.selectedFixture   = null;
  AppState.isLoading         = false;

  UI.showScreen("screen-continents");
}
