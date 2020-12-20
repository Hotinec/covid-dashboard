import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const currentCountrySlice = createSlice({
  name: 'currentCountry',
  initialState: '',
  reducers: {
    setCountry: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectCurrentCountry = createSelector(
  state => state.currentCountry,
  country => country,
);

export const { setCountry } = currentCountrySlice.actions;

export default currentCountrySlice.reducer;