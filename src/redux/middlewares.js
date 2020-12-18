import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../services/api';

export const fetchCovidInfo = createAsyncThunk('covidInfo/set', async () => {
  const apiResponse = await apiRequest('https://api.covid19api.com/summary');
  const additionalInfo = await apiRequest(
    'https://restcountries.eu/rest/v2/all?fields=alpha2Code;population;flag;latlng',
  );

  const countries = apiResponse.Countries;
  const extendCountriesList = countries.map(item => {
    const countryId = additionalInfo.findIndex(
      el => el.alpha2Code === item.CountryCode,
    );
    const extendCountry = {
      ...item,
      flag: additionalInfo[countryId].flag,
      population: additionalInfo[countryId].population,
      geometry: additionalInfo[countryId].latlng
    };
    return extendCountry;
  });
  return {
    Global: apiResponse.Global,
    Countries: extendCountriesList,
    Date: apiResponse.Date,
  };
});

export const fetchCurrentCountry = createAsyncThunk(
  'cuurentCountry/set',
  async country => {
    const apiResponse = await apiRequest(
      `https://api.covid19api.com/country/${country}`,
    );
    return apiResponse;
  },
);