/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { fetchCovidInfo } from "./middlewares";
import { selectSearch } from "./searchSlice";
import { selectParameter } from "./parameterSlice";
import { filter } from "../utils/filter";

export const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.CountryCode,
});

const initialState = countriesAdapter.getInitialState({
  Global: {},
  Date: "",
  loading: "idle",
  error: false,
});

const covidInfoSlice = createSlice({
  name: "covidInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCovidInfo.pending, (state) => {
      if (state.error === true) {
        state.error = false;
      }
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(fetchCovidInfo.fulfilled, (state, { payload }) => {
      state.Date = payload.Date;
      state.Global = payload.Global;
      state.loading = "idle";
      countriesAdapter.upsertMany(state, payload.Countries);
    });
    builder.addCase(fetchCovidInfo.rejected, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
      if (state.error === false) {
        state.error = true;
      }
    });
  },
});

export const selectGlobalInfo = createSelector(
  (state) => state.covidInfo.Global,
  (global) => global
);
export const selectInfoLoader = createSelector(
  (state) => state.covidInfo.loading,
  (loading) => loading
);
export const selectInfoError = createSelector(
  (state) => state.covidInfo.error,
  (error) => error
);

export const {
  selectById: selectCountryById,
  selectIds: selectCountryIds,
  selectEntities: selectCountryEntities,
  selectAll: selectAllCountries,
  selectTotal: selectTotalCountries,
} = countriesAdapter.getSelectors((state) => state.covidInfo);

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

    return filteredByParameter;
  }
);

export default covidInfoSlice.reducer;
