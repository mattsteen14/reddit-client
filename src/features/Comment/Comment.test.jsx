import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useGetPostCommentsQuery, useGetAuthorIconQuery } from "../../reddit/redditApiSlice";
import { Comment } from "./Comment";

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetPostCommentsQuery: jest.fn(),
    useGetAuthorIconQuery: jest.fn(),
}));

describe('Comment Component', () => {
    const mockPermalink = '/r/test/comments/123';
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading state', () => {
        useGetPostCommentsQuery.mockReturnValue({
            isLoading: true,
            data: null,
            error: null,
            isSuccess: false
        })
        render(<Comment permalink={mockPermalink}/>);
        expect(screen.getByTestId('comment-loading')).toBeInTheDocument();
    });

    test('renders error state', () => {
        useGetPostCommentsQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: true,
            isSuccess: false
        });
        render(<Comment permalink={mockPermalink}/>);
        expect(screen.getByTestId('comment-error')).toBeInTheDocument();
    })

    test('renders comments on success', () => {
            const mockComments = 
            [
            {
                id: 1,
                author: 'author1',
                body: 'This is a comment.',
                created_utc: Date.now() / 1000,
                score: 10,
            },
        ];
        useGetAuthorIconQuery.mockReturnValue({
            data: { icon_img: 'https://www.redditstatic.com/desktop2x/img/favicon.ico' }
        });
        useGetPostCommentsQuery.mockReturnValue({
            isLoading: false,
            data: mockComments,
            error: null,
            isSuccess: true
        });
        render(<Comment permalink={mockPermalink}/>);
        expect(screen.getByText('This is a comment.')).toBeInTheDocument();
        expect(screen.getByText('u/author1')).toBeInTheDocument();
    })
});