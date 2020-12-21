import { parameters } from '../constants';

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
          Cases: Math.floor(
            (country.TotalConfirmed * 100000) / country.population,
          ),
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
          Cases: Math.floor(
            (country.TotalDeaths * 100000) / country.population,
          ),
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
          Cases: Math.floor(
            (country.TotalRecovered * 100000) / country.population,
          ),
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
          Cases: Math.floor(
            (country.NewConfirmed * 100000) / country.population,
          ),
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
          Cases: Math.floor((country.NewDeaths * 100000) / country.population),
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
          Cases: Math.floor(
            (country.NewRecovered * 100000) / country.population,
          ),
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
