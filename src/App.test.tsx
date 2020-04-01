import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

xtest('renders corona walrus link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/corona/i);
  expect(linkElement).toBeInTheDocument();
});
