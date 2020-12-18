import { createSlice } from "@reduxjs/toolkit";
import { fetchChartData } from "./middlewares";

const chartInfoSlice = createSlice({
  name: "chartInfo",
  initialState: {
    loading: "idle",
    data: []
  },
  extraReducers: {
    [fetchChartData.pending]: (state) => {
      if (state.loading === "idle") {
        state.loading = "loading";
      }
    },
    [fetchChartData.fulfilled]: (state, action) => {
      if (state.loading === "loading") {
        state.loading = "idle";
      }
      state.data = action.payload;
    }
  }
});

export default chartInfoSlice.reducer;
