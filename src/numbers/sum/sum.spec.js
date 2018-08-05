// @flow

import sum from './sum';

describe('numbers/sum', () => {
  test('sums multiple numbers', () => {
    const expected: number = 12;

    const actual: number = sum(1, 2, 3, 6);

    expect(actual).toBe(expected);
  });

  test('single number returns the number', () => {
    const expected: number = 1;

    const actual: number = sum(1);

    expect(actual).toBe(expected);
  });
});
