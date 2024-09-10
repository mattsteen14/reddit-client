import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ROOT = 'https://www.reddit.com';

export const redditApiSlice = createApi({
    reducerPath: 'redditApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_ROOT
    }),
    endpoints: (builder) => ({
        getSubredditPosts: builder.query({
            query: (subreddit) => `${subreddit}.json`,
            transformResponse: (response) => response.data.children.map((post) => post.data),
        }),
        getSubreddits: builder.query({
            query: () => '/subreddits.json',
            transformResponse: (response) => response.data.children.map((subreddit) => subreddit.data),
        }),
        getPostComments: builder.query({
            query: (permalink) => `${permalink}.json`,
            transformResponse: (response) => response[1].data.children.map((comment) => comment.data),
        }),
    }),
});

export const {
    useGetSubredditPostsQuery,
    useGetSubredditsQuery,
    useGetPostCommentsQuery,
} = redditApiSlice;

export default redditApiSlice.reducer;