import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from "react-redux";
import { useGetSearchResultsQuery, useGetAuthorIconQuery, useGetPostCommentsQuery } from "../../reddit/redditApiSlice";
import { Search } from "./Search";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetSearchResultsQuery: jest.fn(),
    useGetAuthorIconQuery: jest.fn(),
    useGetPostCommentsQuery: jest.fn(),
}));

describe('Search Component', () => {
    beforeEach(() => {
        useSelector.mockReturnValue('popular');
        useDispatch.mockReturnValue(jest.fn());
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('renders loading state', () => {
        useGetSearchResultsQuery.mockReturnValue({
            isLoading: true,
            data: null,
            error: null,
            isSuccess: false
        });
        render(<Search />);
        expect(screen.getByTestId('post-loading')).toBeInTheDocument();
    });

    test('renders error state', () => {
        useGetSearchResultsQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: {
                status: 500,
                message: 'Server Error'
            },
            isSuccess: false
        });
        render(<Search />);
        expect(screen.getByText('Failed to load content.')).toBeInTheDocument();
        expect(screen.getByText('Error: 500')).toBeInTheDocument();
        expect(screen.getByText('Server Error')).toBeInTheDocument();
    });

    test('renders Results header on success', () => {
        const mockPosts = [
            {
                id: '1',
                author: 'author1',
                title: 'First Post',
                subreddit: 'popular',
                selftext: 'This is some content.',
                score: 10,
                num_comments: 5,
            }
        ];
        useGetSearchResultsQuery.mockReturnValue({
            isLoading: false,
            data: mockPosts,
            error: null,
            isSuccess: true
        });

        useGetAuthorIconQuery.mockReturnValue({
            data: { icon_img: 'https://www.redditstatic.com/desktop2x/img/favicon.ico' }
        });

        useGetPostCommentsQuery.mockReturnValue({
            isLoading: false,
            data: mockPosts,
            error: null,
            isSuccess: true
        });

        render(<Search />);
        expect(screen.getByText('Results')).toBeInTheDocument();
    })

});