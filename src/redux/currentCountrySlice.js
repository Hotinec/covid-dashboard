import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentCountry } from './middlewares';

const currentCountrySlice = createSlice({
  name: 'currentCountry',
  initialState: {
    loading: 'idle',
    info: [],
    currentRequestId: undefined,
  },
  reducers: {},
  extraReducers: {
    [fetchCurrentCountry.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchCurrentCountry.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.info = action.payload;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const { setCountry } = currentCountrySlice.actions;

export default currentCountrySlice.reducer;