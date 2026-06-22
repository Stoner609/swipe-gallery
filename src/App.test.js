import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import App from './App';

test('renders the carousel demo', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('heading', { name: /demo/i })).toBeInTheDocument();
});

test('selects a card when clicked', () => {
	const { container } = render(<App />);
	const carousel = container.querySelector('[data-swiping]');
	const card = within(carousel).getByRole('button', { name: /city at blue hour/i });

  fireEvent.click(card);

	expect(card).toHaveAttribute('aria-pressed', 'true');
});

test('renders a bounded carousel window instead of repeated full data sets', () => {
	Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1024 });
	const { container } = render(<App />);
	const carousel = container.querySelector('[data-swiping]');

	// 1024px 下只需五張可視卡片與左右緩衝，不會依資料筆數倍增整個 DOM。
	expect(carousel.querySelectorAll('button')).toHaveLength(9);
});
