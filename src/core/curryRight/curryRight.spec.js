// @flow

import curryRight from './curryRight';

function concat(
  s1: string,
  s2: string,
): string {
  return `${s1} ${s2}`;
}

describe('core/curryRight', () => {
  test('It should return a function per argument. After all arguments are passed, it should return the result.', () => {
    const expected: string = 'Hello world';

    const fn: Function = curryRight(concat);
    const fn1: Function = fn('world');
    const actual: string = fn1('Hello');

    expect(actual).toBe(expected);
  });

  test('it should accept values in construct', () => {
    const expected: string = 'Hello world';

    const fn: Function = curryRight(concat, 'world');
    const actual: string = fn('Hello');

    expect(actual).toBe(expected);
  });

  test('it should accept multiple arguments when nested functions are called', () => {
    const expected: string = 'Hello world';

    const fn: Function = curryRight(concat);
    const actual: string = fn('world', 'Hello');

    expect(actual).toBe(expected);
  });
});