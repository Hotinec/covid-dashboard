import { configureStore } from "@reduxjs/toolkit";
import covidInfo from "./covidInfoSlice";
import currentCountry from "./currentCountrySlice";
import chartInfo from "./chartInfoSlice";
import currentBoard from './currentBoardSlice';

const rootReducer = {
  covidInfo,
  currentCountry,
  chartInfo,
  currentBoard
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;