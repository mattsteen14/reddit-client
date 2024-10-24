import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useDispatch } from "react-redux";
import { useGetSubredditsQuery } from "../../reddit/redditApiSlice";
import { Subreddits } from "./Subreddits";

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetSubredditsQuery: jest.fn(),
}))

describe('Subreddits Component', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    
    test('renders list of subreddits', () => {
        const mockSubreddits = [
            {
                id: 1,
                display_name: 'Test',
                display_name_prefixed: 'r/test',
            }
        ]
        useGetSubredditsQuery.mockReturnValue({
            data: mockSubreddits,
            error: null,
            isSuccess: true
        })

        render(<Subreddits />);

        expect(screen.getByText('Test')).toBeInTheDocument();
    })
})