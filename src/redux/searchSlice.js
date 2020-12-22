import { createSlice, createSelector } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearch: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const selectSearch = createSelector(
  (state) => state.search,
  (search) => search
);
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
