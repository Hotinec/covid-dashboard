import { createSlice } from '@reduxjs/toolkit';
import flags from '../data/countries.json';

const covidInfoSlice = createSlice({
    name: 'covidInfo',
    initialState: {
        Global: {},
        Countries: [],
        isLoaded: false
    },
    reducers: {
        set: (state, action) => {
            const countriesInfoWithFlags = action.payload.Countries.map((item) => {
            const countryFlag = flags.find((country)=> item.CountryCode === country.alpha2Code);
            return {...item, flag: countryFlag.flag}
            })
            state = {
                Global: action.payload.Global,
                Countries: countriesInfoWithFlags,
                isLoaded: true
            };
            return state
        },
        setLoaded: (state, action) => {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
    }
})

export const { set, setLoaded } = covidInfoSlice.actions;

export default covidInfoSlice.reducer;