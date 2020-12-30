/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectCountryById, selectGlobalInfo } from "./covidInfoSlice";
import { SLICES_NAMES } from "../constants";
import { getParametersArr } from "../utils/parametersArray";

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
export const getParameterInfo = createSelector(
  selectGlobalInfo,
  getCurrentCountryInfo,
  (global, country) => {
    let parametersInfo;
    if (country) {
      parametersInfo = getParametersArr(country);
    } else {
      parametersInfo = getParametersArr(global);
    }
    return parametersInfo;
  }
);

export const { setCountry } = currentCountrySlice.actions;

export default currentCountrySlice.reducer;
