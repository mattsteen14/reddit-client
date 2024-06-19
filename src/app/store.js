import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditReducer from '../reddit/redditSlice';
import subRedditReducer from '../reddit/subRedditSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    reddit: redditReducer,
    subReddit: subRedditReducer
  },
});
