import { createSlice } from '@reduxjs/toolkit'

export const subRedditSlice = createSlice({
    name: 'subReddit',
    initialState: {
        subReddit: {}
    },
    reducers: {

    }
});

export const { } = subRedditSlice.actions;

export default subRedditSlice.reducer;