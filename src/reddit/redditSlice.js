import { createSlice } from '@reduxjs/toolkit'

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        reddit: {}
    },
    reducers: {

    }
});

export const { } = redditSlice.actions;

export default redditSlice.reducer;