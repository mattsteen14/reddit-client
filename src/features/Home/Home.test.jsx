import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useSelector } from "react-redux";
import { useGetSubredditPostsQuery } from "../../reddit/redditApiSlice";
import Home from "./Home";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetSubredditPostsQuery: jest.fn(),
}));

describe('Home Component', () => {
    beforeEach(() => {
        useSelector.mockReturnValue('popular');
    })
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
            selftext: 'First Post',
            url: 'https://www.reddit.com',
            score: 10,
            num_comments: 5,
            permalink: 'https://www.reddit.com',
            subreddit_name_prefixed: 'r/popular'
        },

        {
            id: 2,
            title: 'Second Post',
            subreddit: 'popular',
            subreddit_icon: 'https://www.redditstatic.com/desktop2x/img/favicon.ico',
            created_utc: Date.now() / 1000,
            author: 'user2',
            selftext: 'Second Post',
            url: 'https://www.reddit.com',
            score: 20,
            num_comments: 10,
            permalink: 'https://www.reddit.com',
            subreddit_name_prefixed: 'r/popular'
        },
    ];
    useGetSubredditPostsQuery.mockReturnValue({
        isLoading: false,
        data: mockPosts,
        error: null,
        isSuccess: true
    });
    render(<Home />);
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('r/popular')).toBeInTheDocument();
    expect(screen.getByText('https://www.reddit.com')).toBeInTheDocument();
    expect(screen.getByText('https://www.reddit.com')).toBeInTheDocument();
})