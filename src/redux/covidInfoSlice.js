import { createSlice } from '@reduxjs/toolkit';
import flags from '../data/countries.json';

const covidInfoSlice = createSlice({
    name: 'covidInfo',
    initialState: [],
    reducers: {
        set: (state, action) => {
            const countriesInfoWithFlags = action.payload.Countries.map((item) => {
            const countryFlag = flags.find((country)=> item.CountryCode === country.alpha2Code);
            return {...item, flag: countryFlag.flag}
            })
            state = { Global: action.payload.Global, Countries: countriesInfoWithFlags};
            return state
        }
    }
})

export const { set } = covidInfoSlice.actions;

export default covidInfoSlice.reducer;