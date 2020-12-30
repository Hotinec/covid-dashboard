import { createSlice, createSelector } from "@reduxjs/toolkit";
import { SLICES_NAMES } from "../constants";

const searchSlice = createSlice({
  name: SLICES_NAMES.SEARCH,
  initialState: "",
  reducers: {
    setSearch: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectSearch = createSelector(
  (state) => state[SLICES_NAMES.SEARCH],
  (search) => search
);
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
