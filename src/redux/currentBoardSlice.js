/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { SLICES_NAMES } from "../constants";

const currentBoardSlice = createSlice({
  name: SLICES_NAMES.CURRENT_BOARD,
  initialState: 0,
  reducers: {
    setBoard: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectCurrentBoard = createSelector(
  (state) => state[SLICES_NAMES.CURRENT_BOARD],
  (board) => board
);

export const { setBoard } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
