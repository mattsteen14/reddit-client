import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../reddit/redditSlice';
import subRedditReducer from '../reddit/subRedditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subReddit: subRedditReducer
  },
});
