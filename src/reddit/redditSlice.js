import { createSlice } from '@reduxjs/toolkit'

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        commentsVisible: {}
    },
    reducers: {
        toggleComments: (state, action) => {
            const postId = action.payload;
            state.commentsVisible[postId] = !state.commentsVisible[postId];
        },
    },
});

export const { toggleComments } = redditSlice.actions;

export default redditSlice.reducer;