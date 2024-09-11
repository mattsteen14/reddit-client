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
        // Insert reducer to reset state back to default r/popular
    },
});

export const { setSubreddit } = subRedditSlice.actions;

export default subRedditSlice.reducer;