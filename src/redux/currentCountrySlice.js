import { createSlice } from "@reduxjs/toolkit";

const currentCountrySlice = createSlice({
  name: "currentCountry",
  initialState: "",
  reducers: {
    setCountry: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

export const { setCountry } = currentCountrySlice.actions;

export default currentCountrySlice.reducer;
