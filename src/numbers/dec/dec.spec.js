// @flow

import dec from './dec';

describe('numbers/dec', () => {
  test('decrements a number by one', () => {
    const expected: number = 1;

    const actual: number = dec(2);

    expect(actual).toBe(expected);
  });
});
