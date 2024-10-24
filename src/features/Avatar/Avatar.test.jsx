import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useGetAuthorIconQuery } from "../../reddit/redditApiSlice";
import { Avatar } from "./Avatar";

jest.mock('../../reddit/redditApiSlice', () => ({
    useGetAuthorIconQuery: jest.fn(),
}));

test('renders avatar with userLogo when no icon is available', () => {
    useGetAuthorIconQuery.mockReturnValue({
        data: null
    });
    render(<Avatar author='user1' />);
    expect(screen.getByAltText('(user1 icon)')).toHaveAttribute('src', expect.stringContaining('userLogo.svg'));
});

test('fallbacks to userLogo on image load error', () => {
    const mockIcon = { icon_img: 'https://example.com/icon.png' };
    useGetAuthorIconQuery.mockReturnValue({
        data: mockIcon
    });
    render(<Avatar author='user1' />);
    const avatarImage = screen.getByAltText('(user1 icon)');
    fireEvent.error(avatarImage);
    expect(avatarImage).toHaveAttribute('src', expect.stringContaining('userLogo.svg'));
})