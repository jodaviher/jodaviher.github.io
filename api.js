// ============================================================
//  TipsterAI Pro - Cliente HTTP del Frontend
//  Todas las llamadas al backend FastAPI pasan por aquí.
//  La URL base apunta a api.goump.com (subdominio EC2).
// ============================================================

const API_BASE_URL = "https://api.goump.com";

const Api = {

  // ----------------------------------------------------------
  //  GET /fixtures/upcoming/{league_id}
  //  Trae los próximos partidos de una liga agrupados por fecha
  // ----------------------------------------------------------
  async getUpcomingFixtures(leagueId, nextN = 10) {
    const url = `${API_BASE_URL}/fixtures/upcoming/${leagueId}?next_n=${nextN}`;
    const response = await fetch(url, {
      method:  "GET",
      headers: { "Content-Type": "application/json" },
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
  async analyzeMatch(fixtureId, leagueId) {
    const response = await fetch(`${API_BASE_URL}/analysis/match`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fixture_id: fixtureId,
        league_id:  leagueId,
        chat_id:    "",   // El backend usa el del .env
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
