// @flow

import curry from './curry';

function subtract(
  n1: number,
  n2: number
): number {
  return n1 - n2;
}

describe('core/curryRight', () => {
  test('It should return a function per argument. After all arguments are passed, it should return the result.', () => {
    const expected: number = 6;

    const fn: Function = curry(subtract);
    const fn1: Function = fn(12);
    const actual: number = fn1(6);

    expect(actual).toBe(expected);
  });

  test('it should accept values in construct', () => {
    const expected: number = 6;

    const fn: Function = curry(subtract, 12);
    const actual: number = fn(6);

    expect(actual).toBe(expected);
  });

  test('it should accept multiple arguments when nested functions are called', () => {
    const expected: number = 6;

    const fn: Function = curry(subtract);
    const actual: number = fn(12, 6);

    expect(actual).toBe(expected);
  });
});