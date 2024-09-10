import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../reddit/redditSlice';
import subRedditReducer from '../reddit/subRedditSlice';
import redditApiReducer from '../reddit/redditApiSlice';
import redditApiSlice from '../reddit/redditApiSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subReddit: subRedditReducer,
    redditApi: redditApiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redditApiSlice.middleware),
});
