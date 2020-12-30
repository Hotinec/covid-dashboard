/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectCountryById } from "./covidInfoSlice";
import { SLICES_NAMES } from "../constants";

const currentCountrySlice = createSlice({
  name: SLICES_NAMES.CURRENT_COUNTRY,
  initialState: "",
  reducers: {
    setCountry: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectCurrentCountry = createSelector(
  (state) => state[SLICES_NAMES.CURRENT_COUNTRY],
  (country) => country
);
export const getCurrentCountryInfo = createSelector(
  (state) => state,
  (state) => selectCountryById(state, state[SLICES_NAMES.CURRENT_COUNTRY])
);

export const { setCountry } = currentCountrySlice.actions;

export default currentCountrySlice.reducer;
