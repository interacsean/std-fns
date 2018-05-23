// @flow

import partialRight from './partialRight';

describe('core/partialRight', () => {
  test('apply one arg from right to left', () => {
    function add(
      a: number,
      b: number
    ): number {
      return a + b;
    }

    const expected: number = 5;

    const partialAdd: Function = partialRight(add, 3);

    const actual: number = partialAdd(2);

    expect(actual).toBe(expected);
  });

  test('apply multiple args from right to left', () => {
    function div(
      a: number,
      b: number,
      c: number
    ): number {
      return a / (b + c);
    }

    const expected: number = 3;

    const partialAdd: Function = partialRight(div, 2, 4);

    const actual: number = partialAdd(18);

    expect(actual).toBe(expected);
  });
});