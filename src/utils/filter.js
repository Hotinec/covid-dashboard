import { parameters } from '../constants';

export const calculationPer100 = (count, population) => {
  return Math.floor((count * 100000) / population);
};

export const filter = (parameter, array) => {
  let filtered;
  switch (parameter) {
    case '':
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.TotalConfirmed,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.totalCases:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.TotalConfirmed,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.totalDeaths:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.TotalDeaths,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });

      break;
    case parameters.totalRecovered:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.TotalRecovered,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.lastDayCases:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.NewConfirmed,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.lastDayDeaths:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.NewDeaths,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.lastDayRecovered:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: country.NewRecovered,
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.totalCases100:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: calculationPer100(country.TotalConfirmed, country.population),
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.totalDeath100:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: calculationPer100(country.TotalDeaths, country.population),
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.totalRecovered100:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: calculationPer100(country.TotalRecovered, country.population),
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.lastDayCases100:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: calculationPer100(country.NewConfirmed, country.population),
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.lastDayDeaths100:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: calculationPer100(country.NewDeaths, country.population),
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;
    case parameters.lastDayRecovered100:
      filtered = array.map(country => {
        return {
          Country: country.Country,
          Cases: calculationPer100(country.NewRecovered, country.population),
          Code: country.CountryCode,
          Flag: country.flag,
          Geometry: country.geometry,
        };
      });
      break;

    default:
      break;
  }
  return filtered;
};
export const chartFilter = (parameter, array, population) => {
  let filtered;
  switch (parameter) {
    case '':
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases: item.total_cases || item.cases,
        };
      });
      break;
    case parameters.totalCases:
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases: item.total_cases || item.cases,
        };
      });
      break;
    case parameters.totalDeaths:
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases: item.total_deaths || item.deaths,
        };
      });
      break;
    case parameters.totalRecovered:
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases: item.total_recovered || item.recovered,
        };
      });
      break;
    case parameters.lastDayCases:
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
    case parameters.lastDayDeaths:
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
    case parameters.lastDayRecovered:
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
    case parameters.totalCases100:
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases:
            calculationPer100(item.total_cases, population) ||
            calculationPer100(item.cases, population),
        };
      });
      break;
    case parameters.totalDeath100:
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases:
            calculationPer100(item.total_deaths, population) ||
            calculationPer100(item.deaths, population),
        };
      });
      break;
    case parameters.totalRecovered100:
      filtered = array.map(item => {
        return {
          date: item.last_update,
          cases:
            calculationPer100(item.total_recovered, population) ||
            calculationPer100(item.recovered, population),
        };
      });
      break;
    case parameters.lastDayCases100:
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
    case parameters.lastDayDeaths100:
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
    case parameters.lastDayRecovered100:
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
  console.log(filtered);
  return filtered;
};
