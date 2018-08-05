// @flow

import inc from './inc';

describe('numbers/dec', () => {
  test('increments a number by one', () => {
    const expected: number = 2;

    const actual: number = inc(1);

    expect(actual).toBe(expected);
  });
});
