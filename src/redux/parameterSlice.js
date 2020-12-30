/* eslint-disable no-return-assign */
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { PARAMETERS, SLICES_NAMES } from "../constants";

const parameterSlice = createSlice({
  name: SLICES_NAMES.PARAMETER,
  initialState: "",
  reducers: {
    setParameter: (state, action) => (state = action.payload),
  },
});

export const { setParameter } = parameterSlice.actions;

const getParameterState = (state) => state[SLICES_NAMES.PARAMETER];
export const selectParameter = createSelector(
  getParameterState,
  (parameter) => parameter
);
export const signByParameter = createSelector(
  getParameterState,
  (parameter) => {
    if (
      parameter === "" ||
      parameter === PARAMETERS.totalCases ||
      parameter === PARAMETERS.lastDayCases ||
      parameter === PARAMETERS.totalCases100 ||
      parameter === PARAMETERS.lastDayCases100
    ) {
      return "confirmed";
    }
    if (
      parameter === PARAMETERS.totalDeaths ||
      parameter === PARAMETERS.lastDayDeaths ||
      parameter === PARAMETERS.totalDeath100 ||
      parameter === PARAMETERS.lastDayDeaths100
    ) {
      return "deaths";
    }
    if (
      parameter === PARAMETERS.totalRecovered ||
      parameter === PARAMETERS.lastDayRecovered ||
      parameter === PARAMETERS.totalRecovered100 ||
      parameter === PARAMETERS.lastDayRecovered100
    ) {
      return "recovered";
    }
    return undefined;
  }
);
export default parameterSlice.reducer;
