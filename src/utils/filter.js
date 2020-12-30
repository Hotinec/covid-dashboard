import { PARAMETERS } from "../constants";

export const calculationPer100 = (count, population) =>
  Math.ceil((count * 100000) / population);

export const filter = (parameter, array) => {
  let filtered;
  switch (parameter) {
    case "":
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.TotalConfirmed,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.totalCases:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.TotalConfirmed,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.totalDeaths:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.TotalDeaths,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));

      break;
    case PARAMETERS.totalRecovered:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.TotalRecovered,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.lastDayCases:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.NewConfirmed,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.lastDayDeaths:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.NewDeaths,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.lastDayRecovered:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: country.NewRecovered,
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.totalCases100:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: calculationPer100(country.TotalConfirmed, country.population),
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.totalDeath100:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: calculationPer100(country.TotalDeaths, country.population),
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.totalRecovered100:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: calculationPer100(country.TotalRecovered, country.population),
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.lastDayCases100:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: calculationPer100(country.NewConfirmed, country.population),
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.lastDayDeaths100:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: calculationPer100(country.NewDeaths, country.population),
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;
    case PARAMETERS.lastDayRecovered100:
      filtered = array.map((country) => ({
        Country: country.Country,
        Cases: calculationPer100(country.NewRecovered, country.population),
        Code: country.CountryCode,
        Flag: country.flag,
        Geometry: country.geometry,
      }));
      break;

    default:
      break;
  }
  return filtered;
};
export const chartFilter = (parameter, array, population) => {
  let filtered;
  switch (parameter) {
    case "":
      filtered = array.map((item) => ({
        date: item.last_update,
        cases: item.total_cases || item.cases,
      }));
      break;
    case PARAMETERS.totalCases:
      filtered = array.map((item) => ({
        date: item.last_update,
        cases: item.total_cases || item.cases,
      }));
      break;
    case PARAMETERS.totalDeaths:
      filtered = array.map((item) => ({
        date: item.last_update,
        cases: item.total_deaths || item.deaths,
      }));
      break;
    case PARAMETERS.totalRecovered:
      filtered = array.map((item) => ({
        date: item.last_update,
        cases: item.total_recovered || item.recovered,
      }));
      break;
    case PARAMETERS.lastDayCases:
      filtered = array.map((item, index, arr) => {
        const totalCases =
          item.total_cases - (arr[index + 1] ? arr[index + 1].total_cases : 0);
        const cases = item.cases - (arr[index + 1] ? arr[index + 1].cases : 0);

        return {
          date: item.last_update,
          cases: totalCases || cases,
        };
      });
      break;
    case PARAMETERS.lastDayDeaths:
      filtered = array.map((item, index, arr) => {
        const totalCases =
          item.total_deaths -
          (arr[index + 1] ? arr[index + 1].total_deaths : 0);
        const cases =
          item.deaths - (arr[index + 1] ? arr[index + 1].deaths : 0);
        return {
          date: item.last_update,
          cases: totalCases || cases,
        };
      });
      break;
    case PARAMETERS.lastDayRecovered:
      filtered = array.map((item, index, arr) => {
        const totalCases =
          item.total_recovered -
          (arr[index + 1] ? arr[index + 1].total_recovered : 0);
        const cases =
          item.recovered - (arr[index + 1] ? arr[index + 1].recovered : 0);
        return {
          date: item.last_update,
          cases: totalCases || cases,
        };
      });
      break;
    case PARAMETERS.totalCases100:
      filtered = array.map((item) => ({
        date: item.last_update,
        cases:
          calculationPer100(item.total_cases, population) ||
          calculationPer100(item.cases, population),
      }));
      break;
    case PARAMETERS.totalDeath100:
      filtered = array.map((item) => ({
        date: item.last_update,
        cases:
          calculationPer100(item.total_deaths, population) ||
          calculationPer100(item.deaths, population),
      }));
      break;
    case PARAMETERS.totalRecovered100:
      filtered = array.map((item) => ({
        date: item.last_update,
        cases:
          calculationPer100(item.total_recovered, population) ||
          calculationPer100(item.recovered, population),
      }));
      break;
    case PARAMETERS.lastDayCases100:
      filtered = array.map((item, index, arr) => {
        const totalCases =
          item.total_cases - (arr[index + 1] ? arr[index + 1].total_cases : 0);
        const cases = item.cases - (arr[index + 1] ? arr[index + 1].cases : 0);

        return {
          date: item.last_update,
          cases:
            calculationPer100(totalCases, population) ||
            calculationPer100(cases, population),
        };
      });
      break;
    case PARAMETERS.lastDayDeaths100:
      filtered = array.map((item, index, arr) => {
        const totalCases =
          item.total_deaths -
          (arr[index + 1] ? arr[index + 1].total_deaths : 0);
        const cases =
          item.deaths - (arr[index + 1] ? arr[index + 1].deaths : 0);
        return {
          date: item.last_update,
          cases:
            calculationPer100(totalCases, population) ||
            calculationPer100(cases, population),
        };
      });
      break;
    case PARAMETERS.lastDayRecovered100:
      filtered = array.map((item, index, arr) => {
        const totalCases =
          item.total_recovered -
          (arr[index + 1] ? arr[index + 1].total_recovered : 0);
        const cases =
          item.recovered - (arr[index + 1] ? arr[index + 1].recovered : 0);
        return {
          date: item.last_update,
          cases:
            calculationPer100(totalCases, population) ||
            calculationPer100(cases, population),
        };
      });
      break;
    default:
      break;
  }
  return filtered;
};
