// ============================================================
//  TipsterAI Pro - Data Local de Ligas y Equipos
//  IDs oficiales de API-Football (v3)
//  Los logos se cargan dinámicamente desde el CDN de API-Football
//  usando el ID de cada liga o equipo. Costo de API: 0
//
//  CDN Ligas:  https://media.api-sports.io/football/leagues/{ID}.png
//  CDN Equipos: https://media.api-sports.io/football/teams/{ID}.png
// ============================================================

const CDN_BASE_LEAGUES = "https://media.api-sports.io/football/leagues";
const CDN_BASE_TEAMS   = "https://media.api-sports.io/football/teams";

const LIGAS = [
  // ----------------------------------------------------------
  //  PREMIER LEAGUE - Inglaterra
  // ----------------------------------------------------------
  {
    id: 39,
    nombre: "Premier League",
    pais: "Inglaterra",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/39.png`,
    equipos: [
      { id: 33,  nombre: "Manchester United" },
      { id: 34,  nombre: "Newcastle" },
      { id: 35,  nombre: "Bournemouth" },
      { id: 36,  nombre: "Fulham" },
      { id: 38,  nombre: "Watford" },
      { id: 39,  nombre: "Wolves" },
      { id: 40,  nombre: "Liverpool" },
      { id: 41,  nombre: "Southampton" },
      { id: 42,  nombre: "Arsenal" },
      { id: 45,  nombre: "Everton" },
      { id: 46,  nombre: "Leicester" },
      { id: 47,  nombre: "Tottenham" },
      { id: 48,  nombre: "West Ham" },
      { id: 49,  nombre: "Chelsea" },
      { id: 50,  nombre: "Manchester City" },
      { id: 51,  nombre: "Brighton" },
      { id: 52,  nombre: "Crystal Palace" },
      { id: 55,  nombre: "Brentford" },
      { id: 66,  nombre: "Aston Villa" },
      { id: 563, nombre: "Nottingham Forest" },
    ],
  },

  // ----------------------------------------------------------
  //  LA LIGA - España
  // ----------------------------------------------------------
  {
    id: 140,
    nombre: "La Liga",
    pais: "España",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/140.png`,
    equipos: [
      { id: 529, nombre: "Barcelona" },
      { id: 530, nombre: "Atlético Madrid" },
      { id: 531, nombre: "Athletic Club" },
      { id: 532, nombre: "Valencia" },
      { id: 533, nombre: "Villarreal" },
      { id: 534, nombre: "Las Palmas" },
      { id: 536, nombre: "Sevilla" },
      { id: 538, nombre: "Celta Vigo" },
      { id: 540, nombre: "Espanyol" },
      { id: 541, nombre: "Real Madrid" },
      { id: 543, nombre: "Real Betis" },
      { id: 546, nombre: "Getafe" },
      { id: 547, nombre: "Girona" },
      { id: 548, nombre: "Real Sociedad" },
      { id: 553, nombre: "Deportivo Alavés" },
      { id: 558, nombre: "Rayo Vallecano" },
      { id: 723, nombre: "Osasuna" },
      { id: 724, nombre: "Valladolid" },
      { id: 727, nombre: "Leganés" },
      { id: 798, nombre: "Mallorca" },
    ],
  },

  // ----------------------------------------------------------
  //  SERIE A - Italia
  // ----------------------------------------------------------
  {
    id: 135,
    nombre: "Serie A",
    pais: "Italia",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/135.png`,
    equipos: [
      { id: 487, nombre: "Lazio" },
      { id: 488, nombre: "Fiorentina" },
      { id: 489, nombre: "AC Milan" },
      { id: 490, nombre: "Cagliari" },
      { id: 491, nombre: "Empoli" },
      { id: 492, nombre: "Napoli" },
      { id: 493, nombre: "Inter" },
      { id: 494, nombre: "Udinese" },
      { id: 495, nombre: "Genoa" },
      { id: 496, nombre: "Juventus" },
      { id: 497, nombre: "Roma" },
      { id: 499, nombre: "Atalanta" },
      { id: 500, nombre: "Bologna" },
      { id: 502, nombre: "Torino" },
      { id: 503, nombre: "Hellas Verona" },
      { id: 504, nombre: "Parma" },
      { id: 505, nombre: "Sassuolo" },
      { id: 511, nombre: "Como" },
      { id: 512, nombre: "Venezia" },
      { id: 1579,nombre: "Monza" },
    ],
  },

  // ----------------------------------------------------------
  //  BUNDESLIGA - Alemania
  // ----------------------------------------------------------
  {
    id: 78,
    nombre: "Bundesliga",
    pais: "Alemania",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/78.png`,
    equipos: [
      { id: 157, nombre: "Bayern München" },
      { id: 158, nombre: "Borussia Dortmund" },
      { id: 159, nombre: "Hertha Berlin" },
      { id: 160, nombre: "SC Freiburg" },
      { id: 161, nombre: "VfB Stuttgart" },
      { id: 162, nombre: "Werder Bremen" },
      { id: 163, nombre: "Borussia M'gladbach" },
      { id: 164, nombre: "Bayer Leverkusen" },
      { id: 165, nombre: "Eintracht Frankfurt" },
      { id: 166, nombre: "Hoffenheim" },
      { id: 167, nombre: "1. FC Köln" },
      { id: 168, nombre: "Bochum" },
      { id: 169, nombre: "Augsburg" },
      { id: 170, nombre: "RB Leipzig" },
      { id: 171, nombre: "Mainz" },
      { id: 172, nombre: "VfL Wolfsburg" },
      { id: 173, nombre: "Heidenheim" },
      { id: 174, nombre: "St. Pauli" },
      { id: 176, nombre: "Union Berlin" },
      { id: 182, nombre: "Holstein Kiel" },
    ],
  },

  // ----------------------------------------------------------
  //  LIGUE 1 - Francia
  // ----------------------------------------------------------
  {
    id: 61,
    nombre: "Ligue 1",
    pais: "Francia",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/61.png`,
    equipos: [
      { id: 80,  nombre: "Lens" },
      { id: 81,  nombre: "Marseille" },
      { id: 82,  nombre: "Montpellier" },
      { id: 83,  nombre: "Nantes" },
      { id: 84,  nombre: "Nice" },
      { id: 85,  nombre: "Paris Saint-Germain" },
      { id: 89,  nombre: "Rennes" },
      { id: 91,  nombre: "Monaco" },
      { id: 93,  nombre: "Strasbourg" },
      { id: 94,  nombre: "Lyon" },
      { id: 95,  nombre: "Toulouse" },
      { id: 96,  nombre: "Brest" },
      { id: 97,  nombre: "Le Havre" },
      { id: 98,  nombre: "Angers" },
      { id: 99,  nombre: "Reims" },
      { id: 100, nombre: "Auxerre" },
      { id: 101, nombre: "Nantes" },
      { id: 103, nombre: "Lille" },
      { id: 111, nombre: "Saint-Étienne" },
      { id: 116, nombre: "Stade de Reims" },
    ],
  },

  // ----------------------------------------------------------
  //  UEFA CHAMPIONS LEAGUE
  // ----------------------------------------------------------
  {
    id: 2,
    nombre: "Champions League",
    pais: "Europa",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/2.png`,
    equipos: [
      // Los equipos de Champions varían cada temporada.
      // Se cargan dinámicamente desde la API al seleccionar
      // esta liga. Ver nota en app.js -> loadTeamsDynamic()
      { id: 529, nombre: "Barcelona" },
      { id: 541, nombre: "Real Madrid" },
      { id: 530, nombre: "Atlético Madrid" },
      { id: 40,  nombre: "Liverpool" },
      { id: 42,  nombre: "Arsenal" },
      { id: 50,  nombre: "Manchester City" },
      { id: 66,  nombre: "Aston Villa" },
      { id: 47,  nombre: "Tottenham" },
      { id: 489, nombre: "AC Milan" },
      { id: 493, nombre: "Inter" },
      { id: 496, nombre: "Juventus" },
      { id: 492, nombre: "Napoli" },
      { id: 499, nombre: "Atalanta" },
      { id: 157, nombre: "Bayern München" },
      { id: 158, nombre: "Borussia Dortmund" },
      { id: 164, nombre: "Bayer Leverkusen" },
      { id: 170, nombre: "RB Leipzig" },
      { id: 85,  nombre: "Paris Saint-Germain" },
      { id: 103, nombre: "Lille" },
      { id: 91,  nombre: "Monaco" },
      { id: 548, nombre: "Real Sociedad" },
      { id: 533, nombre: "Villarreal" },
      { id: 165, nombre: "Eintracht Frankfurt" },
      { id: 500, nombre: "Bologna" },
      { id: 547, nombre: "Girona" },
      { id: 487, nombre: "Lazio" },
      { id: 488, nombre: "Fiorentina" },
      { id: 96,  nombre: "Brest" },
      { id: 160, nombre: "SC Freiburg" },
      { id: 162, nombre: "Werder Bremen" },
      { id: 163, nombre: "Borussia M'gladbach" },
      { id: 166, nombre: "Hoffenheim" },
    ],
  },

  // ----------------------------------------------------------
  //  UEFA EUROPA LEAGUE
  // ----------------------------------------------------------
  {
    id: 3,
    nombre: "Europa League",
    pais: "Europa",
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/3.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
      { id: 49,  nombre: "Chelsea" },
      { id: 48,  nombre: "West Ham" },
      { id: 45,  nombre: "Everton" },
      { id: 36,  nombre: "Fulham" },
      { id: 536, nombre: "Sevilla" },
      { id: 543, nombre: "Real Betis" },
      { id: 531, nombre: "Athletic Club" },
      { id: 532, nombre: "Valencia" },
      { id: 497, nombre: "Roma" },
      { id: 487, nombre: "Lazio" },
      { id: 502, nombre: "Torino" },
      { id: 504, nombre: "Parma" },
      { id: 81,  nombre: "Marseille" },
      { id: 84,  nombre: "Nice" },
      { id: 89,  nombre: "Rennes" },
      { id: 94,  nombre: "Lyon" },
      { id: 161, nombre: "VfB Stuttgart" },
      { id: 172, nombre: "VfL Wolfsburg" },
      { id: 169, nombre: "Augsburg" },
      { id: 171, nombre: "Mainz" },
    ],
  },
];

// ============================================================
//  Helper: obtener URL del logo de un equipo por su ID
// ============================================================
function getTeamLogo(teamId) {
  return `${CDN_BASE_TEAMS}/${teamId}.png`;
}

// ============================================================
//  Helper: obtener una liga por su ID
// ============================================================
function getLigaById(ligaId) {
  return LIGAS.find((l) => l.id === ligaId) || null;
}

// ============================================================
//  Helper: obtener un equipo por su ID dentro de una liga
// ============================================================
function getEquipoById(ligaId, equipoId) {
  const liga = getLigaById(ligaId);
  if (!liga) return null;
  return liga.equipos.find((e) => e.id === equipoId) || null;
}

// Exportar para uso en app.js
// (Si usas módulos ES6 descomenta la línea siguiente)
// export { LIGAS, getTeamLogo, getLigaById, getEquipoById };
