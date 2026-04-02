// ============================================================
//  TipsterAI Pro - Lógica Principal de la Mini App
//  Orquesta la navegación entre pantallas y los eventos
//  de usuario. Conecta UI con API.
//
//  Flujo de pantallas:
//    screen-leagues → screen-fixtures → [loading] → screen-success
// ============================================================

// Estado global de la aplicación
const AppState = {
  selectedLeague:  null,  // { id, nombre }
  selectedFixture: null,  // { fixture_id, local, visitante }
  isLoading:       false,
};

// ── Inicializar la app al cargar el DOM ──────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initTelegramWebApp();
  initLeaguesScreen();
  checkBackendStatus();
});

// ----------------------------------------------------------
//  TELEGRAM MINI APP: inicializar SDK
// ----------------------------------------------------------
function initTelegramWebApp() {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // Aplicar colores del tema de Telegram si están disponibles
    //if (tg.colorScheme === "light") {
    //  document.documentElement.style.setProperty("--bg-base", "#f5f5f5");
    //}
  }
}

// ----------------------------------------------------------
//  HEALTH CHECK: verificar que el backend responde
// ----------------------------------------------------------
async function checkBackendStatus() {
  try {
    await Api.getStatus();
  } catch {
    // Backend no disponible, mostrar aviso suave
    // No bloqueamos la app, el error aparecerá al intentar cargar partidos
    console.warn("[App] Backend no disponible en este momento");
  }
}

// ----------------------------------------------------------
//  PANTALLA 1: LIGAS
// ----------------------------------------------------------
function initLeaguesScreen() {
  // Renderizar grid de ligas desde data_ligas.js
  UI.renderLeagues("leagues-grid");

  // Evento: click en una liga
  document.getElementById("leagues-grid")?.addEventListener("click", (e) => {
    const card = e.target.closest(".league-card");
    if (!card) return;

    const leagueId     = parseInt(card.dataset.leagueId);
    const leagueNombre = card.dataset.leagueNombre;

    AppState.selectedLeague  = { id: leagueId, nombre: leagueNombre };
    AppState.selectedFixture = null;

    UI.selectLeague(leagueId);

    // Habilitar botón de próximos partidos
    const btn = document.getElementById("btn-upcoming");
    if (btn) {
      btn.disabled = false;
      btn.textContent = `⚽ Ver partidos de ${leagueNombre}`;
    }
  });

  // Evento: teclado en cards de liga
  document.getElementById("leagues-grid")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.target.closest(".league-card")?.click();
    }
  });

  // Evento: botón VER PRÓXIMOS PARTIDOS
  document.getElementById("btn-upcoming")?.addEventListener("click", async () => {
    if (!AppState.selectedLeague) return;
    await loadFixtures(AppState.selectedLeague.id);
  });
}

// ----------------------------------------------------------
//  CARGAR PARTIDOS: transición a pantalla 2
// ----------------------------------------------------------
async function loadFixtures(leagueId) {
  if (AppState.isLoading) return;
  AppState.isLoading = true;

  UI.setButtonState("btn-upcoming", false, "Cargando...");

  try {
    const data = await Api.getUpcomingFixtures(leagueId, 10);

    if (!data.success || !data.grupos) {
      UI.showToast("No hay partidos disponibles para esta liga.");
      return;
    }

    // Guardar datos y navegar a pantalla de partidos
    AppState.fixturesData = data;
    initFixturesScreen(data);
    UI.showScreen("screen-fixtures");

  } catch (err) {
    console.error("[App] Error cargando partidos:", err);
    UI.showToast(err.message || "Error conectando con el servidor.");
  } finally {
    AppState.isLoading = false;
    UI.setButtonState(
      "btn-upcoming",
      !!AppState.selectedLeague,
      AppState.selectedLeague
        ? `⚽ Ver partidos de ${AppState.selectedLeague.nombre}`
        : "⚽ Ver próximos partidos"
    );
  }
}

// ----------------------------------------------------------
//  PANTALLA 2: PARTIDOS
// ----------------------------------------------------------
function initFixturesScreen(data) {
  // Actualizar título con nombre de la liga
  const titleEl = document.getElementById("fixtures-league-name");
  if (titleEl) titleEl.textContent = data.league_nombre || "";

  // Renderizar partidos agrupados por fecha
  UI.renderFixtures("fixtures-list", data.grupos);

  // Limpiar selección previa
  AppState.selectedFixture = null;
  UI.hideSelectionPanel("selection-panel");

  // Evento: click en un partido
  document.getElementById("fixtures-list")?.addEventListener("click", (e) => {
    const card = e.target.closest(".fixture-card");
    if (!card) return;

    const fixtureId  = parseInt(card.dataset.fixtureId);
    const local      = card.dataset.local;
    const visitante  = card.dataset.visitante;

    // Si ya estaba seleccionado, deseleccionar
    if (AppState.selectedFixture?.fixture_id === fixtureId) {
      AppState.selectedFixture = null;
      UI.selectFixture(null);
      UI.hideSelectionPanel("selection-panel");
      return;
    }

    AppState.selectedFixture = { fixture_id: fixtureId, local, visitante };
    UI.selectFixture(fixtureId);
    UI.showSelectionPanel("selection-panel", { local, visitante });

    // Registrar eventos del panel recién renderizado
    bindSelectionPanelEvents();

    // Scroll suave al panel
    setTimeout(() => {
      document.getElementById("selection-panel")?.scrollIntoView({
        behavior: "smooth",
        block:    "nearest",
      });
    }, 100);
  });

  // Evento: teclado en cards de partido
  document.getElementById("fixtures-list")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.target.closest(".fixture-card")?.click();
    }
  });

  // Evento: botón VOLVER
  document.getElementById("btn-back-leagues")?.addEventListener("click", () => {
    AppState.selectedFixture = null;
    UI.hideSelectionPanel("selection-panel");
    UI.showScreen("screen-leagues");
  });
}

// ----------------------------------------------------------
//  EVENTOS DEL PANEL DE CONFIRMACIÓN
// ----------------------------------------------------------
function bindSelectionPanelEvents() {
  // Botón ANALIZAR
  document.getElementById("btn-analyze")?.addEventListener("click", async () => {
    if (!AppState.selectedFixture || !AppState.selectedLeague) return;
    await runAnalysis();
  });

  // Botón CANCELAR
  document.getElementById("btn-deselect")?.addEventListener("click", () => {
    AppState.selectedFixture = null;
    document.querySelectorAll(".fixture-card").forEach((c) =>
      c.classList.remove("selected")
    );
    UI.hideSelectionPanel("selection-panel");
  });
}

// ----------------------------------------------------------
//  ANÁLISIS: pipeline completo
// ----------------------------------------------------------
async function runAnalysis() {
  if (AppState.isLoading) return;
  if (!AppState.selectedFixture || !AppState.selectedLeague) return;

  AppState.isLoading = true;

  const { fixture_id, local, visitante } = AppState.selectedFixture;
  const leagueId = AppState.selectedLeague.id;

  // Mostrar pantalla de carga con pasos animados
  UI.showScreen("screen-loading");
  UI.showLoadingScreen("screen-loading");

  try {
    const result = await Api.analyzeMatch(fixture_id, leagueId);

    if (!result.success) {
      throw new Error(result.error || "Error en el análisis");
    }

    // Mostrar pantalla de éxito
    UI.showScreen("screen-result");
    UI.showSuccessScreen("screen-result", { local, visitante });

    // Registrar evento del botón NUEVO ANÁLISIS
    document.getElementById("btn-new-analysis")?.addEventListener("click", () => {
      resetApp();
    });

  } catch (err) {
    console.error("[App] Error en análisis:", err);

    // Volver a la pantalla de partidos con el toast de error
    UI.showScreen("screen-fixtures");
    UI.showToast(err.message || "Error generando el análisis. Intenta de nuevo.");

  } finally {
    AppState.isLoading = false;
  }
}

// ----------------------------------------------------------
//  RESET: volver al inicio para nuevo análisis
// ----------------------------------------------------------
function resetApp() {
  AppState.selectedLeague  = null;
  AppState.selectedFixture = null;
  AppState.isLoading       = false;
  AppState.fixturesData    = null;

  // Limpiar selecciones visuales
  document.querySelectorAll(".league-card").forEach((c) =>
    c.classList.remove("selected")
  );

  // Resetear botón de ligas
  const btn = document.getElementById("btn-upcoming");
  if (btn) {
    btn.disabled    = true;
    btn.textContent = "⚽ Ver próximos partidos";
  }

  UI.showScreen("screen-leagues");
}
