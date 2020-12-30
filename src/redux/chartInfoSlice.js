/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { fetchChartData } from "./middlewares";
import { selectParameter } from "./parameterSlice";
import { chartFilter } from "../utils/filter";
import { selectGlobalInfo } from "./covidInfoSlice";
import { getCurrentCountryInfo } from "./currentCountrySlice";
import { LOADER_STATES, SLICES_NAMES } from "../constants";

const chartInfoSlice = createSlice({
  name: SLICES_NAMES.CHART_INFO,
  initialState: {
    loading: LOADER_STATES.IDLE,
    data: [],
  },
  extraReducers: {
    [fetchChartData.pending]: (state) => {
      if (state.loading === LOADER_STATES.IDLE) {
        state.loading = LOADER_STATES.LOADING;
      }
    },
    [fetchChartData.fulfilled]: (state, action) => {
      if (state.loading === LOADER_STATES.LOADING) {
        state.loading = LOADER_STATES.IDLE;
      }
      state.data = action.payload;
    },
  },
});

export const getChartData = createSelector(
  (state) => state[SLICES_NAMES.CHART_INFO].data,
  selectParameter,
  selectGlobalInfo,
  getCurrentCountryInfo,
  (data, parameter, globalInfo, curCountryInfo) => {
    const globalPopulation = globalInfo.worldPopulation;
    const population = curCountryInfo
      ? curCountryInfo.population
      : globalPopulation;

    const filtered = chartFilter(parameter, data, population);
    return filtered;
  }
);

export default chartInfoSlice.reducer;
