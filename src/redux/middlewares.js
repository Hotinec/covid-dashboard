import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../services/api";

export const fetchChartData = createAsyncThunk(
  "chartInfo/fetch",
  async (country, thunkAPI) => {
    const cur = thunkAPI.getState();
    const currentCountry = cur.covidInfo.entities[country];
    let result;
    if (!country) {
      result = await apiRequest("https://covid19-api.org/api/timeline");
    } else {
      result = await apiRequest(
        `https://api.covid19api.com/country/${currentCountry}`
      );
    }
    return result;
  }
);

export const fetchCovidInfo = createAsyncThunk("covidInfo/set", async () => {
  const apiResponse = await apiRequest("https://api.covid19api.com/summary");
  const additionalInfo = await apiRequest(
    "https://restcountries.eu/rest/v2/all?fields=alpha2Code;population;flag"
  );
  const countries = apiResponse.Countries;
  const extendCountriesList = countries.map((item) => {
    const countryId = additionalInfo.findIndex(
      (el) => el.alpha2Code === item.CountryCode
    );
    const extendCountry = {
      ...item,
      flag: additionalInfo[countryId].flag,
      population: additionalInfo[countryId].population
    };
    return extendCountry;
  });
  const worldPopulation = additionalInfo.reduce(
    (acc, item) => acc + item.population,
    0
  );
  return {
    Global: { ...apiResponse.Global, worldPopulation },
    Countries: extendCountriesList,
    Date: apiResponse.Date
  };
});
