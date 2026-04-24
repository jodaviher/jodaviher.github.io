// ============================================================
//  TipsterAI Pro - Cliente HTTP del Frontend
//  Todas las llamadas al backend FastAPI pasan por aquí.
//  La URL base apunta a api.goump.com (subdominio EC2).
// ============================================================

<<<<<<< HEAD
const API_BASE_URL = "https://rheoscopic-justina-feebly.ngrok-free.dev";   //"https://api.goump.com"
=======
const API_BASE_URL ="https://rheoscopic-justina-feebly.ngrok-free.dev";   //"https://api.goump.com"
>>>>>>> 5210440 (Se agregan nuevas ligas, ahora es anio de temporada es tomado del data_ligas)

const Api = {

  // ----------------------------------------------------------
  //  GET /fixtures/upcoming/{league_id}
  //  Trae los próximos partidos de una liga agrupados por fecha
  // ----------------------------------------------------------
  async getUpcomingFixtures(leagueId, nextN = 10, season = null) {
    let url = `${API_BASE_URL}/fixtures/upcoming/${leagueId}?next_n=${nextN}`;
    if (season) url += `&season=${season}`;
    const response = await fetch(url, {
      method:  "GET",
      headers: { "Content-Type": "application/json",
<<<<<<< HEAD
               "ngrok-skip-browser-warning": "true" },
=======
        "ngrok-skip-browser-warning": "true"
       },
>>>>>>> 5210440 (Se agregan nuevas ligas, ahora es anio de temporada es tomado del data_ligas)
    });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.detail || `Error ${response.status}`);
    }
    return response.json();
  },

  // ----------------------------------------------------------
  //  POST /analysis/match
  //  Dispara el análisis completo y envía resultado a Telegram
  // ----------------------------------------------------------
  async analyzeMatch(fixtureId, leagueId, season = null) {
    const response = await fetch(`${API_BASE_URL}/analysis/match`, {
      method:  "POST",
      headers: { "Content-Type": "application/json",
<<<<<<< HEAD
               "ngrok-skip-browser-warning": "true" },
=======
        "ngrok-skip-browser-warning": "true"
       },
>>>>>>> 5210440 (Se agregan nuevas ligas, ahora es anio de temporada es tomado del data_ligas)
      body: JSON.stringify({
        fixture_id: fixtureId,
        league_id:  leagueId,
        chat_id:    "",   // El backend usa el del .env
        season:     season || null,
      }),
    });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.detail || `Error ${response.status}`);
    }
    return response.json();
  },

  // ----------------------------------------------------------
  //  GET /fixtures/status
  //  Health check del backend al cargar la app
  // ----------------------------------------------------------
  async getStatus() {
    const response = await fetch(`${API_BASE_URL}/fixtures/status`, {
      method: "GET",
    });
    if (!response.ok) throw new Error("Backend no disponible");
    return response.json();
  },
};
