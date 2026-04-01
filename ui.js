// ============================================================
//  TipsterAI Pro - Funciones de UI
//  Renderiza ligas, partidos, estados de carga y mensajes.
//  No contiene lógica de negocio, solo presentación.
// ============================================================

const UI = {

  // ----------------------------------------------------------
  //  NAVEGACIÓN ENTRE PANTALLAS
  // ----------------------------------------------------------
  showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((s) => {
      s.classList.remove("active");
    });
    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");
  },

  // ----------------------------------------------------------
  //  RENDERIZAR GRID DE LIGAS
  // ----------------------------------------------------------
  renderLeagues(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = LIGAS.map((liga) => `
      <div
        class="league-card"
        data-league-id="${liga.id}"
        data-league-nombre="${liga.nombre}"
        role="button"
        tabindex="0"
        aria-label="Seleccionar ${liga.nombre}"
      >
        <img
          class="league-logo"
          src="${liga.logo}"
          alt="${liga.nombre}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
        />
        <div class="league-logo-fallback" style="display:none">⚽</div>
        <div>
          <div class="league-name">${liga.nombre}</div>
          <div class="league-country">${liga.pais}</div>
        </div>
      </div>
    `).join("");
  },

  // ----------------------------------------------------------
  //  MARCAR LIGA SELECCIONADA
  // ----------------------------------------------------------
  selectLeague(leagueId) {
    document.querySelectorAll(".league-card").forEach((card) => {
      card.classList.toggle(
        "selected",
        parseInt(card.dataset.leagueId) === leagueId
      );
    });
  },

  // ----------------------------------------------------------
  //  RENDERIZAR LISTA DE PARTIDOS AGRUPADOS POR FECHA
  // ----------------------------------------------------------
  renderFixtures(containerId, grupos) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!grupos || Object.keys(grupos).length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-state-icon">📅</span>
          <p class="empty-state-text">
            No hay partidos próximos disponibles<br>para esta liga.
          </p>
        </div>
      `;
      return;
    }

    // Ordenar grupos: HOY primero, MANANA segundo, resto por fecha
    const ordenados = Object.entries(grupos).sort(([a], [b]) => {
      if (a === "HOY")    return -1;
      if (b === "HOY")    return  1;
      if (a === "MANANA") return -1;
      if (b === "MANANA") return  1;
      return a.localeCompare(b);
    });

    container.innerHTML = ordenados.map(([key, grupo]) => `
      <div class="date-group">
        <div class="date-label">${grupo.label}</div>
        ${grupo.partidos.map((p) => this._fixtureCardHTML(p)).join("")}
      </div>
    `).join("");
  },

  // ── HTML de una card de partido ──────────────────────────
  _fixtureCardHTML(partido) {
    const localLogo     = partido.local?.logo     || "";
    const visitanteLogo = partido.visitante?.logo || "";
    const arbitro       = partido.arbitro !== "No confirmado"
      ? `<span class="fixture-meta-item">🟨 ${partido.arbitro}</span>`
      : "";
    const estadio = partido.estadio
      ? `<span class="fixture-meta-item">🏟️ ${partido.estadio}</span>`
      : "";

    return `
      <div
        class="fixture-card"
        data-fixture-id="${partido.fixture_id}"
        data-local="${partido.local?.nombre || ''}"
        data-visitante="${partido.visitante?.nombre || ''}"
        role="button"
        tabindex="0"
        aria-label="${partido.local?.nombre} vs ${partido.visitante?.nombre}"
      >
        <div class="fixture-teams">

          <!-- Equipo local -->
          <div class="fixture-team">
            ${localLogo
              ? `<img class="fixture-team-logo" src="${localLogo}"
                      alt="${partido.local?.nombre}"
                      loading="lazy"
                      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`
              : ""}
            <div class="fixture-team-logo-fallback"
                 style="display:${localLogo ? 'none' : 'flex'}">⚽</div>
            <div class="fixture-team-name">${partido.local?.nombre || "Local"}</div>
          </div>

          <!-- VS + hora -->
          <div class="fixture-vs">
            <div class="fixture-vs-text">VS</div>
            <div class="fixture-time">${partido.hora_utc || "TBD"}</div>
          </div>

          <!-- Equipo visitante -->
          <div class="fixture-team">
            ${visitanteLogo
              ? `<img class="fixture-team-logo" src="${visitanteLogo}"
                      alt="${partido.visitante?.nombre}"
                      loading="lazy"
                      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`
              : ""}
            <div class="fixture-team-logo-fallback"
                 style="display:${visitanteLogo ? 'none' : 'flex'}">⚽</div>
            <div class="fixture-team-name">${partido.visitante?.nombre || "Visitante"}</div>
          </div>

        </div>

        <!-- Meta: árbitro y estadio -->
        ${(arbitro || estadio) ? `
          <div class="fixture-meta">
            ${estadio}
            ${arbitro && estadio ? '<div class="fixture-meta-dot"></div>' : ""}
            ${arbitro}
          </div>
        ` : ""}
      </div>
    `;
  },

  // ----------------------------------------------------------
  //  MARCAR PARTIDO SELECCIONADO
  // ----------------------------------------------------------
  selectFixture(fixtureId) {
    document.querySelectorAll(".fixture-card").forEach((card) => {
      card.classList.toggle(
        "selected",
        parseInt(card.dataset.fixtureId) === fixtureId
      );
    });
  },

  // ----------------------------------------------------------
  //  MOSTRAR PANEL DE CONFIRMACIÓN (botón ANALIZAR)
  // ----------------------------------------------------------
  showSelectionPanel(containerId, partido) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="selection-panel">
        <div class="selection-label">Partido seleccionado</div>
        <div class="selection-match">
          <div class="selection-team-name">${partido.local}</div>
          <div class="selection-vs">VS</div>
          <div class="selection-team-name">${partido.visitante}</div>
        </div>
        <div class="btn-group">
          <button class="btn-primary" id="btn-analyze">
            🔍 ANALIZAR ESTE PARTIDO
          </button>
          <button class="btn-secondary" id="btn-deselect">
            Cancelar selección
          </button>
        </div>
      </div>
    `;
  },

  hideSelectionPanel(containerId) {
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = "";
  },

  // ----------------------------------------------------------
  //  PANTALLA DE CARGA CON PASOS ANIMADOS
  // ----------------------------------------------------------
  showLoadingScreen(screenId) {
    const screen = document.getElementById(screenId);
    if (!screen) return;

    const pasos = [
      "Consultando datos del partido",
      "Analizando tabla de posiciones",
      "Procesando historial H2H",
      "Cargando estadísticas de equipos",
      "Verificando lesiones y bajas",
      "Consultando clima y árbitro",
      "Generando análisis con IA",
    ];

    screen.innerHTML = `
      <div class="loading-screen">
        <div class="loading-orb"></div>
        <div class="loading-title">ANALIZANDO</div>
        <div class="loading-steps" id="loading-steps">
          ${pasos.map((p, i) => `
            <div class="loading-step ${i === 0 ? 'active' : ''}" data-step="${i}">
              <div class="loading-step-dot"></div>
              <span>${p}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Animar pasos secuencialmente
    this._animateLoadingSteps(pasos.length);
  },

  _animateLoadingSteps(total) {
    let current = 0;
    const interval = setInterval(() => {
      const steps = document.querySelectorAll(".loading-step");
      if (!steps.length) {
        clearInterval(interval);
        return;
      }

      // Marcar paso anterior como done
      if (current > 0 && steps[current - 1]) {
        steps[current - 1].classList.remove("active");
        steps[current - 1].classList.add("done");
      }

      // Activar paso actual
      if (current < total) {
        if (steps[current]) {
          steps[current].classList.add("active");
        }
        current++;
      } else {
        // Marcar todos como done al terminar
        steps.forEach((s) => {
          s.classList.remove("active");
          s.classList.add("done");
        });
        clearInterval(interval);
      }
    }, 800);
  },

  // ----------------------------------------------------------
  //  PANTALLA DE ÉXITO
  // ----------------------------------------------------------
  showSuccessScreen(screenId, partido) {
    const screen = document.getElementById(screenId);
    if (!screen) return;

    screen.innerHTML = `
      <div class="success-screen">
        <div class="success-icon">✓</div>
        <div class="success-title">ANÁLISIS ENVIADO</div>
        <div class="success-subtitle">
          El análisis de <strong>${partido.local} vs ${partido.visitante}</strong>
          ha sido enviado a tu chat de Telegram.
        </div>
        <div class="btn-group mt-20" style="width:100%; max-width:280px">
          <button class="btn-primary" id="btn-new-analysis">
            ⚽ NUEVO ANÁLISIS
          </button>
        </div>
      </div>
    `;
  },

  // ----------------------------------------------------------
  //  TOAST DE ERROR
  // ----------------------------------------------------------
  showToast(mensaje, duracion = 4000) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.textContent = `⚠️ ${mensaje}`;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, duracion);
  },

  // ----------------------------------------------------------
  //  HABILITAR / DESHABILITAR BOTÓN
  // ----------------------------------------------------------
  setButtonState(buttonId, enabled, texto = null) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;
    btn.disabled = !enabled;
    if (texto) btn.textContent = texto;
  },
};
