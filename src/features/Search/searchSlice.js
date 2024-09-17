import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: 'popular'
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        delSearch: (state, action) => {
            state.search = '';
        } 
    }
})

export const { setSearch, delSearch } = searchSlice.actions;

export default searchSlice.reducer;