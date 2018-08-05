// @flow

import subtract from './subtract';

describe('numbers/subtract', () => {
  test('subtracts multiple numbers', () => {
    const expected: number = 2;

    const actual: number = subtract(12, 2, 5, 3);

    expect(actual).toBe(expected);
  });

  test('single number returns the number', () => {
    const expected: number = 1;

    const actual: number = subtract(1);

    expect(actual).toBe(expected);
  });
});
