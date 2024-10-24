import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useDispatch } from "react-redux";
import { Header } from "./Header";

test('renders the FaReddit logo icon', () => {
    render(<Header />);
    const redditIcon = screen.getByRole('img', { hidden: true });
    expect(redditIcon).toBeInTheDocument();
});

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}))


test('dispatches setSearch action on form submit', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<Header />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'test' } });

    const form = screen.getByRole('textbox');
    fireEvent.submit(form);

    expect(dispatch).toHaveBeenCalledWith({ type: 'search/setSearch', payload: 'test' });
});