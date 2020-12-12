import { createSlice } from '@reduxjs/toolkit';

const covidInfoSlice = createSlice({
    name: 'covidInfo',
    initialState: [],
    reducers: {
        set: (state, action) => state = action.payload
    }
})

export const { set } = covidInfoSlice.actions;

export default covidInfoSlice.reducer;