import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ROOT = 'https://www.reddit.com';

export const redditApi = createApi({
    reducerPath: 'redditApi', // Unique key for slice in Redux store
    baseQuery: fetchBaseQuery({
        baseUrl: API_ROOT
    }),
    endpoints: (builder) => ({
        // Fetch subreddit posts
        getSubredditPosts: builder.query({
            query: (subreddit) => `${subreddit}.json`,
            transformResponse: (response) => response.data.children.map((post) => post.data), // Transform the post to match your needs
        }),
        // Fetch subreddits
        getSubreddits: builder.query({
            query: () => '/subreddits.json',
            transformResponse: (response) => response.data.children.map((subreddit) => subreddit.data),
        }),
        // Fetch post comments
        getPostComments: builder.query({
            query: (permalink) => `${permalink}.json`,
            transformResponse: (response) => response[1].data.children.map((comment) => comment.data),
        }),
        // Fetch search subreddits
        getSearchResults: builder.query({
            query: (term) => `/search.json?q=${term}&type=link`,
            transformResponse: (response) => response.data.children.map((subreddit) => subreddit.data),
        }),
    }),
});

// Export auto-generated hooks for usage in functional components
export const {
    useGetSubredditPostsQuery,
    useGetSubredditsQuery,
    useGetPostCommentsQuery,
    useGetSearchResultsQuery,
} = redditApi;

export default redditApi.reducer;