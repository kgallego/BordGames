import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders corona walrus link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/corona/i);
  expect(linkElement).toBeInTheDocument();
});
