import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ROOT = 'https://www.reddit.com';

// Custom baseQuery with error handling
const baseQuery = async (args, api, extraOptions) => {
    try {
        const result = fetchBaseQuery({
            baseUrl: API_ROOT
        })(args, api, extraOptions);

        if (result.error) {
            console.log('Result error:', result.error);
            // Handle specific error codes
            if (result.error.status === 429) {
                // Rate limit exceeded
                console.error('Rate limit exceeded. Please try again later.');
            };
        }
        // Add more error handling logic here if needed
        return result;
    } catch (error) {
        console.error('Error:',error);
        return {
            error: {
                status: error.status,
                data: error.data,
                message: error.message
            }
        };
    }
};

export const redditApi = createApi({
    reducerPath: 'redditApi', // Unique key for slice in Redux store
    baseQuery,
    endpoints: (builder) => ({
        // Fetch subreddit posts
        getSubredditPosts: builder.query({
            query: (subreddit) => `${subreddit}.json?sr_detail=1`,
            transformResponse: (response) => response.data.children.map((post) => ({
                ...post.data,
                subreddit_icon: post.data.sr_detail.icon_img, // Access the detailed subreddit information
            })), 
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
        getAuthorIcon: builder.query({
            query: (author) => `/user/${author}/about.json`,
            transformResponse: (response) => ({
                ...response.data,
                icon_img: response.data.icon_img,
            }),
        }),
    }),
});

// Export auto-generated hooks for usage in functional components
export const {
    useGetSubredditPostsQuery,
    useGetSubredditsQuery,
    useGetPostCommentsQuery,
    useGetSearchResultsQuery,
    useGetAuthorIconQuery,
} = redditApi;

export default redditApi.reducer;