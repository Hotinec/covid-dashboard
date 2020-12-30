export const PARAMETERS = Object.freeze({
  totalCases: "Total cases",
  totalDeaths: "Total death",
  totalRecovered: "Total recovered",
  lastDayCases: "Last day cases",
  lastDayDeaths: "Last day death",
  lastDayRecovered: "Last day recovered",
  totalCases100: "Total cases per 100 thousand population",
  totalDeath100: "Total deaths per 100 thousand population",
  totalRecovered100: "Total recovered per 100 thousand population",
  lastDayCases100: "Last day cases per 100 thousand population",
  lastDayDeaths100: "Last day deaths per 100 thousand population",
  lastDayRecovered100: "Last day recovered per 100 thousand population",
});

export const LOADER_STATES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
});

export const MARKER_COLORS = [
  { name: "weak", color: "rgba(5, 155, 247, 0.7)" },
  { name: "medium", color: "rgba(53,211,156,0.7)" },
  { name: "large", color: "rgba(230, 0, 0, 0.7)" },
];

export const TOKEN =
  "pk.eyJ1IjoiY2hvdGluZWMiLCJhIjoiY2s1dXIxbDEyMDNqazNybGwzcTBydmdybyJ9.E0ZzR-BquMw7y5WGatf6XQ";

export const SLICES_NAMES = Object.freeze({
  CHART_INFO: "chartInfo",
  COVID_INFO: "covidInfo",
  CURRENT_BOARD: "currentBoard",
  CURRENT_COUNTRY: "currentCountry",
  PARAMETER: "parameter",
  SEARCH: "search",
});
