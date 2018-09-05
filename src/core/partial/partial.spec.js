// @flow

import partial from './partial';

describe('core/partial', () => {
  test('should partially apply one argument from left to right', () => {
    const expected: number = 6;

    function add(
      a: number,
      b: number,
      c: number
    ): number {
      return a + b + c;
    }

    const partialAdd: Function = partial(add, 1);

    const actual: number = partialAdd(2, 3);

    expect(actual).toBe(expected);
  });

  test('should partially apply multiple arguments from left to right', () => {
    const expected: number = 1;

    function acc(
      a: number,
      b: number,
      c: number
    ): number {
      return a * b / c;
    }

    const partialAdd: Function = partial(acc, 2, 5);

    const actual: number = partialAdd(10);

    expect(actual).toBe(expected);
  });
});
