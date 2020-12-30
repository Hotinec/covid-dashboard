/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { fetchCovidInfo } from "./middlewares";
import { selectSearch } from "./searchSlice";

import { selectParameter } from "./parameterSlice";
import { filter } from "../utils/filter";
import { LOADER_STATES, SLICES_NAMES } from "../constants";

export const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.CountryCode,
});

const initialState = countriesAdapter.getInitialState({
  Global: {},
  Date: "",
  loading: LOADER_STATES.IDLE,
  error: false,
});

const covidInfoSlice = createSlice({
  name: SLICES_NAMES.COVID_INFO,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCovidInfo.pending, (state) => {
      if (state.error === true) {
        state.error = false;
      }
      if (state.loading === LOADER_STATES.IDLE) {
        state.loading = LOADER_STATES.LOADING;
      }
    });
    builder.addCase(fetchCovidInfo.fulfilled, (state, { payload }) => {
      state.Date = payload.Date;
      state.Global = payload.Global;
      state.loading = LOADER_STATES.IDLE;
      countriesAdapter.upsertMany(state, payload.Countries);
    });
    builder.addCase(fetchCovidInfo.rejected, (state) => {
      if (state.loading === LOADER_STATES.IDLE) {
        state.loading = LOADER_STATES.LOADING;
      }
      if (state.error === false) {
        state.error = true;
      }
    });
  },
});
const getCovidInfoState = (state) => state[SLICES_NAMES.COVID_INFO];

export const selectGlobalInfo = createSelector(
  getCovidInfoState,
  (covidInfo) => covidInfo.Global
);

export const selectInfoLoader = createSelector(
  getCovidInfoState,
  (covidInfo) => covidInfo.loading
);

export const selectInfoDate = createSelector(
  getCovidInfoState,
  (covidInfo) => covidInfo.Date
);

export const selectInfoError = createSelector(
  getCovidInfoState,
  (covidInfo) => covidInfo.error
);

export const {
  selectById: selectCountryById,
  selectIds: selectCountryIds,
  selectEntities: selectCountryEntities,
  selectAll: selectAllCountries,
  selectTotal: selectTotalCountries,
} = countriesAdapter.getSelectors(getCovidInfoState);

export const filteredCountries = createSelector(
  selectAllCountries,
  selectParameter,
  (countries, parameter) => {
    const filteredByParameter = filter(parameter, countries);
    return filteredByParameter;
  }
);

export const markerSizeByCountries = createSelector(
  selectAllCountries,
  selectParameter,
  (countries, parameter) => {
    const filteredByParameter = filter(parameter, countries);
    const counts = filteredByParameter.map((country) => country.Cases);
    const maxCount = Math.max(...counts);
    const minCount = Math.min(...counts);
    const diff = maxCount - minCount;
    return {
      div: diff * 0.2,
      div2: diff * 0.8,
    };
  }
);

export const filteredQueryCountries = createSelector(
  selectAllCountries,
  selectSearch,
  selectParameter,
  (countries, query, parameter) => {
    const reg = new RegExp(`${query}`, "gi");
    const filtered = countries.filter((country) => country.Country.match(reg));
    const filteredByParameter = filter(parameter, filtered);
    return filteredByParameter.sort(
      (country1, country2) => country2.Cases - country1.Cases
    );
  }
);

export default covidInfoSlice.reducer;
