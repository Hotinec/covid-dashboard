/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectCountryById } from "./covidInfoSlice";

const currentCountrySlice = createSlice({
  name: "currentCountry",
  initialState: "",
  reducers: {
    setCountry: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectCurrentCountry = createSelector(
  (state) => state.currentCountry,
  (country) => country
);
export const getCurrentCountryInfo = createSelector(
  (state) => state,
  (state) => selectCountryById(state, state.currentCountry)
);

export const { setCountry } = currentCountrySlice.actions;

export default currentCountrySlice.reducer;
