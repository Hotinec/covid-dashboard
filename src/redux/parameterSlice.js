/* eslint-disable no-return-assign */
import { createSlice, createSelector } from "@reduxjs/toolkit";

const parameterSlice = createSlice({
  name: "parameter",
  initialState: "",
  reducers: {
    setParameter: (state, action) => (state = action.payload),
  },
});

export const { setParameter } = parameterSlice.actions;
export const selectParameter = createSelector(
  (state) => state.parameter,
  (parameter) => parameter
);
export default parameterSlice.reducer;
