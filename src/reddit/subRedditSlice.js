import { createSlice } from '@reduxjs/toolkit'

export const subRedditSlice = createSlice({
    name: 'subReddit',
    initialState: {
        subReddit: 'r/popular'
    },
    reducers: {
        setSubreddit: (state, action) => {
            state.subReddit = action.payload;
        },
    },
});

export const { setSubreddit } = subRedditSlice.actions;

export default subRedditSlice.reducer;