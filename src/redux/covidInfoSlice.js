import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchCovidInfo } from './middlewares';

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

export default covidInfoSlice.reducer;
