import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component with Header, View and Subreddits', () => {
  render(<App />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('complementary')).toBeInTheDocument();
});
