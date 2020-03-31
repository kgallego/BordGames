import React from 'react';
import { render } from '@testing-library/react';
import Hover from './Screen';

describe('Hover', () => {
  it('renders', () => {
    const { getByTestId } = render(<Hover />);
    expect(getByTestId('tile')).toBeDefined();
  });
});
