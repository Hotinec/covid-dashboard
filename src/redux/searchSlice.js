import { createSlice, createSelector} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers:{
        setSearch: (state, action)=> {
      console.log('hi from search reducer');
            state = action.payload
            console.log(state);
            return state;
        },
    }
})

export const selectSearch = createSelector(state => state.search, search => search);
export const {setSearch} = searchSlice.actions;

export default searchSlice.reducer;