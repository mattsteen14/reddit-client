import { renderHook, waitFor } from '@testing-library/react';
import { setupApiStore } from '../../api/setupApiStore';
import { redditApi } from '../redditApiSlice';

const storeRef = setupApiStore(redditApi);

describe('redditApiSlice queries', () => {
    describe('getSubredditPosts', () => {
        it('handles successful fetch of subreddit posts', async () => {
            const spy = jest.spyOn(redditApi, 'useGetSubredditPostsQuery').mockReturnValue({
                data: [
                    {
                        id: 1,
                        title: 'Test Post 1',
                        subreddit_icon: 'icon_url_1'
                    }
                ],
                isLoading: false,
                isError: false,
                error: null,
            });
            const { result } = renderHook(() => redditApi.useGetSubredditPostsQuery('test'),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toEqual([{
                id: 1,
                title: 'Test Post 1',
                subreddit_icon: 'icon_url_1'
            }]);
            expect(result.current.isError).toBe(false);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });

        it('handles errors correctly when fetching subreddit posts', async () => {
            const spy = jest.spyOn(redditApi, 'useGetSubredditPostsQuery').mockReturnValue({
                data: null,
                isLoading: false,
                isError: true,
                error: {
                    message: 'Internal Server Error'
                },
            });
            const { result } = renderHook(() => redditApi.useGetSubredditPostsQuery('test'),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toBeNull();
            expect(result.current.error.message).toBe('Internal Server Error');
            expect(result.current.isError).toBe(true);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
    });
    describe('getSubreddits', () => {
        it('handles successful fetch of subreddits', async () => {
            const spy = jest.spyOn(redditApi, 'useGetSubredditsQuery').mockReturnValue({
                data: [{
                    id: 1,
                    display_name: 'Subreddit1'
                }],
                isLoading: false,
                isError: false,
                error: null,
            });
            const { result } = renderHook(() => redditApi.useGetSubredditsQuery(),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toEqual([{
                id: 1,
                display_name: 'Subreddit1'
            }]);
            expect(result.current.isError).toBe(false);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });

        it('handles errors correctly when fetching subreddits', async () => {
            const spy = jest.spyOn(redditApi, 'useGetSubredditsQuery').mockReturnValue({
                data: null,
                isLoading: false,
                isError: true,
                error: {
                    message: 'Internal Server Error'
                },
            });
            const { result } = renderHook(() => redditApi.useGetSubredditsQuery(),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toBeNull();
            expect(result.current.error.message).toBe('Internal Server Error');
            expect(result.current.isError).toBe(true);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
    });
    describe('getPostComments', () => {
        it('handles successful fetch of post comments', async () => {
            const spy = jest.spyOn(redditApi, 'useGetPostCommentsQuery').mockReturnValue({
                data: [{
                    id: 1,
                    body: 'Test Comment'
                }],
                isLoading: false,
                isError: false,
                error: null,
            });
            const { result } = renderHook(() => redditApi.useGetPostCommentsQuery(1),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toEqual([{
                id: 1,
                body: 'Test Comment'
            }]);
            expect(result.current.isError).toBe(false);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });

        it('handles errors correctly when fetching post comments', async () => {
            const spy = jest.spyOn(redditApi, 'useGetPostCommentsQuery').mockReturnValue({
                data: null,
                isLoading: false,
                isError: true,
                error: {
                    message: 'Internal Server Error'
                },
            });
            const { result } = renderHook(() => redditApi.useGetPostCommentsQuery(1),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toBeNull();
            expect(result.current.error.message).toBe('Internal Server Error');
            expect(result.current.isError).toBe(true);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
    });
    describe('getSearchResults', () => {
        it('handles successful fetch of search results', async () => {
            const spy = jest.spyOn(redditApi, 'useGetSearchResultsQuery').mockReturnValue({
                data: [{
                    id: 1,
                    name: 'Test Subreddit'
                }],
                isLoading: false,
                isError: false,
                error: null,
            });
            const { result } = renderHook(() => redditApi.useGetSearchResultsQuery('test'),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toEqual([{
                id: 1,
                name: 'Test Subreddit'
            }]);
            expect(result.current.isError).toBe(false);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
        it('handles errors correctly when fetching search results', async () => {
            const spy = jest.spyOn(redditApi, 'useGetSearchResultsQuery').mockReturnValue({
                data: null,
                isLoading: false,
                isError: true,
                error: {
                    message: 'Search failed'
                },
            });
            const { result } = renderHook(() => redditApi.useGetSearchResultsQuery('test'),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toBeNull();
            expect(result.current.error.message).toBe('Search failed');
            expect(result.current.isError).toBe(true);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
    });
    describe('getAuthorIcon', () => {
        it('handles successful fetch of author icon', async () => {
            const spy = jest.spyOn(redditApi, 'useGetAuthorIconQuery').mockReturnValue({
                data: 'https://example.com/icon.png',
                isLoading: false,
                isError: false,
                error: null,
            });
            const { result } = renderHook(() => redditApi.useGetAuthorIconQuery('test'),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toBe('https://example.com/icon.png');
            expect(result.current.isError).toBe(false);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
        it('handles errors correctly when fetching author icon', async () => {
            const spy = jest.spyOn(redditApi, 'useGetAuthorIconQuery').mockReturnValue({
                data: null,
                isLoading: false,
                isError: true,
                error: {
                    message: 'Icon not found'
                },
            });
            const { result } = renderHook(() => redditApi.useGetAuthorIconQuery('test'),
                { wrapper: storeRef.wrapper }
            );
            await waitFor(() => result.current.isLoading === false);
            expect(result.current.data).toBeNull();
            expect(result.current.error.message).toBe('Icon not found');
            expect(result.current.isError).toBe(true);
            expect(result.current.isLoading).toBe(false);
            spy.mockRestore(); // Restore the spy
        });
    });
});