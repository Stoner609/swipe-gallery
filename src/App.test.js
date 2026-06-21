import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('renders the carousel demo', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('heading', { name: /demo/i })).toBeInTheDocument();
});

test('selects a card when clicked', () => {
  const { getByRole } = render(<App />);
  const card = getByRole('button', { name: /city at blue hour/i });

  fireEvent.click(card);

  expect(card).toHaveAttribute('aria-pressed', 'true');
});
