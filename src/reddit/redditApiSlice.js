import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ROOT = 'https://www.reddit.com';

// Custom baseQuery with error handling
const baseQuery = async (args, api, extraOptions) => {
    try {
        const result = await fetchBaseQuery({
            baseUrl: API_ROOT
        })(args, api, extraOptions);

        if (result.error) {
            let customMessage = '';
            // Handle specific error codes with custom messages
            switch (result.error.status) {
                case 429:
                    customMessage = 'Rate limit exceeded. Please try again later.';
                    break;
                case 'FETCH_ERROR':
                    customMessage = 'Rate Limit Exceeded. Please try again later.';
                    break;
                case 401:
                    customMessage = 'Unauthorized. Please check your credentials.';
                    break;
                case 403:
                    customMessage = 'Access Denied. Please check your credentials.';
                    break;
                case 404:
                    customMessage = 'Content not found.';
                    break;
                case 500:
                    customMessage = 'Internal Server Error. Please try again later.';
                    break;
                case 502:
                    customMessage = 'Bad Gateway. Please try again later.';
                    break;
                case 503:
                    customMessage = 'Service Unavailable. Please try again later.';
                    break;
                case 504:
                    customMessage = 'Gateway Timeout. Please try again later.';
                    break;
                // Add more cases for different status codes as needed
                default:
                    customMessage = 'An unexpected error occurred.';
            }

            console.log('Result error:', result.error);

            return {
                error: {
                    ...result.error,
                    message: customMessage // Attach the custom message here
                }
            };
        }

        return result;
    } catch (error) {
        console.error('Error:', error);
        return {
            error: {
                status: error.status || 'UNKNOWN',
                data: error.data,
                message: error.message || 'An unexpected error occurred.'
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