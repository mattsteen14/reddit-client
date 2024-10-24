import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from "react-redux";
import { useGetAuthorIconQuery, useGetSubredditPostsQuery, useGetPostCommentsQuery } from "../../reddit/redditApiSlice";
import { Home } from "./Home";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetSubredditPostsQuery: jest.fn(),
    useGetAuthorIconQuery: jest.fn(),
    useGetPostCommentsQuery: jest.fn(),
}));

describe('Home Component', () => {
    beforeEach(() => {
        useSelector.mockReturnValue('popular');
        useDispatch.mockReturnValue(jest.fn());
    });

    test('renders loading state', () => {
        useGetSubredditPostsQuery.mockReturnValue({
            isLoading: true,
            data: null,
            error: null,
            isSuccess: false
        });
        render(<Home />);
        expect(screen.getByTestId('post-loading')).toBeInTheDocument();
    });

    test('renders error state', () => {
        useGetSubredditPostsQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: {
                status: 500,
                message: 'Server Error'
            },
            isSuccess: false
        });
        render(<Home />);
        expect(screen.getByText('Failed to load content.')).toBeInTheDocument();
        expect(screen.getByText('Error: 500')).toBeInTheDocument();
        expect(screen.getByText('Server Error')).toBeInTheDocument();
    });

    test('renders posts on success', () => {
        const mockPosts = [
            {
                id: 1,
                title: 'First Post',
                subreddit: 'popular',
                subreddit_icon: 'https://www.redditstatic.com/desktop2x/img/favicon.ico',
                created_utc: Date.now() / 1000,
                author: 'user1',
                selftext: 'This is some content.',
                url: 'https://www.reddit.com',
                score: 10,
                num_comments: 5,
            },
            {
                id: 2,
                title: 'Second Post',
                subreddit: 'popular',
                subreddit_icon: 'https://www.redditstatic.com/desktop2x/img/favicon.ico',
                created_utc: Date.now() / 1000,
                author: 'user2',
                selftext: 'Yes it is.',
                url: 'https://www.reddit.com',
                score: 20,
                num_comments: 10,
            },
        ];

        useGetSubredditPostsQuery.mockReturnValue({
            isLoading: false,
            data: mockPosts,
            error: null,
            isSuccess: true
        });

        useGetAuthorIconQuery.mockReturnValue({
            data: { icon_img: 'https://www.redditstatic.com/desktop2x/img/favicon.ico' },
        });

        useGetPostCommentsQuery.mockReturnValue({
            isLoading: false,
            data: mockPosts,
            error: null,
            isSuccess: true
        });

        render(<Home />);

        const postDiv = screen.getByTestId('post-div');
        expect(postDiv).toHaveClass('post');
    });

});
