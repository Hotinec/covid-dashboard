import { configureStore } from "@reduxjs/toolkit";
import covidInfo from "./covidInfoSlice";
import currentCountry from "./currentCountrySlice";
import chartInfo from "./chartInfoSlice";

const rootReducer = {
  covidInfo,
  currentCountry,
  chartInfo
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;