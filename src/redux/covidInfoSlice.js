import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchCovidInfo } from './middlewares';
import { createSelector } from 'reselect';

export const countriesAdapter = createEntityAdapter({
  selectId: country => country.CountryCode,
});

const initialState = countriesAdapter.getInitialState({
  Global: {},
  Date: '',
  loading: 'idle',
});

const covidInfoSlice = createSlice({
  name: 'covidInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCovidInfo.pending, state => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(fetchCovidInfo.fulfilled, (state, { payload }) => {
      state.Date = payload.Date;
      state.Global = payload.Global;
      state.loading = 'idle';
      countriesAdapter.upsertMany(state, payload.Countries);
    });
  },
});

export const selectGlobalInfo = createSelector(
  state => state.covidInfo.Global,
  global => global,
);
export const selectInfoLoader = createSelector(
  state => state.covidInfo.loading,
  loading => loading,
);

export const {
  selectById: selectCountryById,
  selectIds: selectCountryIds,
  selectEntities: selectCountryEntities,
  selectAll: selectAllCountries,
  selectTotal: selectTotalCountries,
} = countriesAdapter.getSelectors(state => state.covidInfo);

export default covidInfoSlice.reducer;
