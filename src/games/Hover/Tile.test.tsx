import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tile from './Tile';
import target from './event.target.boundingClientRect.json';

describe('Tile', () => {
  it.each`
    direction   |   axis
    ${'top'}    |   ${'clientY'}
    ${'bottom'} |   ${'clientY'}
    ${'left'}   |   ${'clientX'}
    ${'right'}  |   ${'clientX'}
  `('returns $direction when tile is hovered from $direction', ({direction, axis}) => {
    const onHover = jest.fn();
    const getBoundingClientRect = jest.fn().mockReturnValue(target);
    const { getByTestId } = render(<Tile onHover={onHover} />);
    const tile = getByTestId('tile');

    fireEvent.mouseOver(tile, {
      // @ts-ignore
      [axis]: target[direction],
      target: {
        getBoundingClientRect
      }
    });

    expect(onHover).toHaveBeenCalledTimes(1);
    expect(onHover).toHaveBeenCalledWith(direction);
  });
});
