import { configureStore } from "@reduxjs/toolkit";
import covidInfo from "./covidInfoSlice";
import currentCountry from "./currentCountrySlice";
import chartInfo from "./chartInfoSlice";
import currentBoard from "./currentBoardSlice";
import search from "./searchSlice";
import parameter from "./parameterSlice";

const rootReducer = {
  covidInfo,
  currentCountry,
  chartInfo,
  currentBoard,
  search,
  parameter,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
