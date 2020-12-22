import { createSlice } from '@reduxjs/toolkit';
import { fetchChartData } from './middlewares';
import { createSelector } from 'reselect';
import { selectParameter } from './parameterSlice';
import { chartFilter } from '../utils/filter';
import { selectGlobalInfo } from './covidInfoSlice';
import { getCurrentCountryInfo } from './currentCountrySlice';
const chartInfoSlice = createSlice({
  name: 'chartInfo',
  initialState: {
    loading: 'idle',
    data: [],
  },
  extraReducers: {
    [fetchChartData.pending]: state => {
      if (state.loading === 'idle') {
        state.loading = 'loading';
      }
    },
    [fetchChartData.fulfilled]: (state, action) => {
      if (state.loading === 'loading') {
        state.loading = 'idle';
      }
      state.data = action.payload;
    },
  },
});

export const getChartData = createSelector(
  state => state.chartInfo.data,
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
  },
);

export default chartInfoSlice.reducer;
