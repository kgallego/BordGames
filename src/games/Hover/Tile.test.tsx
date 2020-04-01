import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tile from './Tile';
import target from './event.target.boundingClientRect.json';

describe('Tile', () => {
  it('returns top when tile is hovered from top', () => {
    const onHover = jest.fn();
    const getBoundingClientRect = jest.fn().mockReturnValue(target);
    const { getByTestId } = render(<Tile onHover={onHover} />);
    const tile = getByTestId('tile');

    fireEvent.mouseOver(tile, {
      clientY: target.top,
      target: {
        getBoundingClientRect
      }
    });

    expect(onHover).toHaveBeenCalledTimes(1);
    expect(onHover).toHaveBeenCalledWith('top');
  });
});
