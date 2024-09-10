import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../reddit/redditSlice';
import subRedditReducer from '../reddit/subRedditSlice';
import { redditApi } from '../reddit/redditApiSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subReddit: subRedditReducer,
    [redditApi.reducerPath]: redditApi.reducer, // The reducer path for the API slice should match the reducerPath defined in redditApi
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redditApi.middleware),
});