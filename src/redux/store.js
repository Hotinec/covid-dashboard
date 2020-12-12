import { configureStore } from '@reduxjs/toolkit';
import covidInfo from './covidInfoSlice';

const rootReducer = {
  covidInfo
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
