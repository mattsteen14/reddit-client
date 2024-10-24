import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleComments } from "../../reddit/redditSlice";
import { useGetPostCommentsQuery, useGetAuthorIconQuery } from '../../reddit/redditApiSlice';
import { Post } from './Post';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetPostCommentsQuery: jest.fn(),
    useGetAuthorIconQuery: jest.fn(),
}));

describe('Post Component', () => {
    beforeEach(() => {
        useSelector.mockReturnValue({
            commentsVisible: {
                1: false,
                2: false,
            }
        });
        useDispatch.mockReturnValue(jest.fn());
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should toggle comment visibility on button click', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);

        const mockPost = {
            id: 1,
            title: 'Test Post',
            subreddit: 'popular',
            subreddit_name_prefixed: 'r/popular',
            subreddit_icon: 'https://www.redditstatic.com/desktop2x/img/favicon.ico',
            created_utc: Date.now() / 1000,
            author: 'user1',
            selftext: 'Test content',
            url: 'https://www.reddit.com',
            score: 123,
            num_comments: 10,
        };

        useGetAuthorIconQuery.mockReturnValue({
            data: { icon_img: 'https://www.redditstatic.com/desktop2x/img/favicon.ico' },
        });

        useGetPostCommentsQuery.mockReturnValue({
            isLoading: false,
            data: [],
            error: null,
            isSuccess: true
        });

        render(<Post post={mockPost} />);

        const commentsButton = screen.getByTestId(`post-comments-${mockPost.id}`);
        fireEvent.click(commentsButton);
        expect(mockDispatch).toHaveBeenCalledWith(toggleComments(mockPost.id));
    });

    test('renders post data', () => {
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
                permalink: 'r/test/comments/1',
                score: 10,
                num_comments: 5,
            },
        ];

        useGetAuthorIconQuery.mockReturnValue({
            data: { icon_img: 'https://www.redditstatic.com/desktop2x/img/favicon.ico' },
        });

        useGetPostCommentsQuery.mockReturnValue({
            isLoading: false,
            data: [],
            error: null,
            isSuccess: true
        });

        render(<Post post={mockPosts[0]} />);

        // Using alternative assertions like alt text and test IDs
        expect(screen.getByTestId('post-subreddit-name')).toBeInTheDocument();
        expect(screen.getByText('u/user1')).toBeInTheDocument();

        // Check for post titles using their alt texts or any other identifiers
        expect(screen.getByText('This is some content.')).toBeInTheDocument();

        // Checking for scores, comments, and subreddit name using data-testid attributes if available
        expect(screen.getByTestId('post-score-1')).toHaveTextContent('10');
        expect(screen.getByTestId('post-comments-1')).toHaveTextContent('5');

    });

});