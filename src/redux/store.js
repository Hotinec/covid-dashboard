import { configureStore } from '@reduxjs/toolkit';
import covidInfo from './covidInfoSlice';
import currentCountry from './currentCountrySlice';

const rootReducer = {
  covidInfo,
  currentCountry
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
