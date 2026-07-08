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
    continente: "Europa",
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
    continente: "Europa",
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
    continente: "Europa",
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
    continente: "Europa",
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
    continente: "Europa",
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
    continente: "Europa",
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
    continente: "Europa",
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

  // ----------------------------------------------------------
  //  LIGA PROFESIONAL ARGENTINA
  // ----------------------------------------------------------
  {
    id: 128,
    nombre: "Liga Profesional Argentina",
    pais: "Argentina",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/128.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  COPA DE LA LIGA PROFESIONAL ARGENTINA
  // ----------------------------------------------------------
  {
    id: 130,
    nombre: "Copa Argentina",
    pais: "Argentina",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/130.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  AUSTRIA SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 219,
    nombre: "2. Liga",
    pais: "Austria",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/219.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  AUSTRIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 218,
    nombre: "Bundesliga",
    pais: "Austria",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/218.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  BELGICA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 144,
    nombre: "Jupiler Pro League",
    pais: "Belgica",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/144.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  BOLIVIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 344,
    nombre: "Primera División",
    pais: "Bolivia",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/344.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  BRASIL PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 71,
    nombre: "Serie A",
    pais: "Brasil",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/71.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  BRASIL SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 72,
    nombre: "Serie B",
    pais: "Brasil",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/72.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  BRASIL COPA
  // ----------------------------------------------------------
  {
    id: 73,
    nombre: "Copa Do Brasil",
    pais: "Brasil",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/73.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  BULGARIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 172,
    nombre: "First League",
    pais: "Bulgaria",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/172.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  CHILE PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 265,
    nombre: "Primera División",
    pais: "Chile",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/265.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  CHINA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 169,
    nombre: "Super League",
    pais: "China",
    continente: "Otras Ligas",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/169.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  CROACIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 210,
    nombre: "HNL",
    pais: "Croacia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/210.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  REPUBLICA CHECA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 345,
    nombre: "Czech Liga",
    pais: "Republica Checa",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/345.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  DINAMARCA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 119,
    nombre: "Superliga",
    pais: "Dinamarca",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/119.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ECUADOR PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 242,
    nombre: "Liga Pro",
    pais: "Ecuador",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/242.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  EGIPTO PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 233,
    nombre: "Premier League",
    pais: "Egipto",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/233.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  INGLATERRA SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 41,
    nombre: "League One",
    pais: "Inglaterra",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/41.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  INGLATERRA TERCERA DIVISION
  // ----------------------------------------------------------
  {
    id: 42,
    nombre: "League Two",
    pais: "Inglaterra",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/42.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  FRANCIA SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 62,
    nombre: "Ligue 2",
    pais: "Francia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/62.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  GRECIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 197,
    nombre: "Super League 1",
    pais: "Grecia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/197.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  HUNGRIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 271,
    nombre: "NB I",
    pais: "Hungria",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/271.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  INDIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 323,
    nombre: "Indian Super League",
    pais: "India",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/323.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  IRLANDA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 357,
    nombre: "Premier Division",
    pais: "Irlanda",
    continente: "Otras Ligas",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/357.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ISRAEL PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 383,
    nombre: "Ligat Ha'al",
    pais: "Israel",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/383.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ITALIA SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 136,
    nombre: "Serie B",
    pais: "Italia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/136.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  JAPON PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 98,
    nombre: "J1 League",
    pais: "Japon",
    continente: "Otras Ligas",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/98.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  MEXICO PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 262,
    nombre: "Liga MX",
    pais: "Mexico",
    continente: "América",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/262.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  PAISES BAJOS PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 88,
    nombre: "Eredivisie",
    pais: "Paises Bajos",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/88.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  PAISES BAJOS SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 89,
    nombre: "Eerste Divisie",
    pais: "Paises Bajos",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/89.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  NORUEGA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 103,
    nombre: "Eliteserien",
    pais: "Noruega",
    continente: "Otras Ligas",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/103.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  PARAGUAY PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 250,
    nombre: "Division Profesional",
    pais: "Paraguay",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/250.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  PERU PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 281,
    nombre: "Primera División",
    pais: "Peru",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/281.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  POLONIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 106,
    nombre: "Ekstraklasa",
    pais: "Polonia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/106.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  PORTUGAL PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 94,
    nombre: "Primeira Liga",
    pais: "Portugal",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/94.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  PORTUGAL SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 95,
    nombre: "Segunda Liga",
    pais: "Portugal",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/95.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  QATAR PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 305,
    nombre: "Stars League",
    pais: "Qatar",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/305.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ROMANIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 283,
    nombre: "Liga I",
    pais: "Romania",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/283.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ESCOCIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 179,
    nombre: "Premiership",
    pais: "Escocia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/179.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  SERBIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 286,
    nombre: "Super Liga",
    pais: "Serbia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/286.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ESLOVAQUIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 332,
    nombre: "Super Liga",
    pais: "Eslovaquia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/332.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  SUDAFRICA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 288,
    nombre: "Premier Soccer League",
    pais: "Sudafrica",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/288.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  ESPAÑA SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 141,
    nombre: "Segunda División",
    pais: "España",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/141.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  SUECIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 113,
    nombre: "Allsvenskan",
    pais: "Suecia",
    continente: "Otras Ligas",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/113.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  SUIZA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 207,
    nombre: "Super League",
    pais: "Suiza",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/207.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  TAILANDIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 296,
    nombre: "Thai League 1",
    pais: "Tailandia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/296.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  TURQUIA SEGUNDA DIVISION
  // ----------------------------------------------------------
  {
    id: 204,
    nombre: "1. Lig",
    pais: "Turquia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/204.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  TURQUIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 203,
    nombre: "Süper Lig",
    pais: "Turquia",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/203.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  USA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 253,
    nombre: "Major League Soccer",
    pais: "USA",
    continente: "América",  
    temporada: 2026,
    logo: `${CDN_BASE_LEAGUES}/253.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
    ],
  },

  // ----------------------------------------------------------
  //  UCRANIA PRIMERA DIVISION
  // ----------------------------------------------------------
  {
    id: 333,
    nombre: "Premier League",
    pais: "Ucrania",
    continente: "Otras Ligas",  
    temporada: 2025,
    logo: `${CDN_BASE_LEAGUES}/333.png`,
    equipos: [
      // Igual que Champions: equipos representativos por temporada.
      // Se complementan dinámicamente.
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
