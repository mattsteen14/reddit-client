import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders the App component with Header, View and Subreddits', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('complementary')).toBeInTheDocument();
});

