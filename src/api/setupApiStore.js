import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../reddit/redditSlice';
import subRedditReducer from '../reddit/subRedditSlice';
import searchReducer from '../features/Search/searchSlice';
import viewReducer from '../features/View/viewSlice';

export const setupApiStore = (api) => {
    const store = configureStore({
        reducer: {
            reddit: redditReducer,
            subReddit: subRedditReducer,
            search: searchReducer,
            view: viewReducer,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    });
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    return { store, wrapper };
};