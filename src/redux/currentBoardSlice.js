/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const currentBoardSlice = createSlice({
  name: "currentBoard",
  initialState: 0,
  reducers: {
    setBoard: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectCurrentBoard = createSelector(
  (state) => state.currentBoard,
  (board) => board
);

export const { setBoard } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
