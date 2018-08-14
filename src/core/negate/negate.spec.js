// @flow

import negate from './negate';

describe('core/negate', () => {
  test('Returns a function which negates the result to false', () => {
    const expected: boolean = false;

    const notTruthy: (string) => boolean = negate((v: string): string => v);
    const actual: boolean = notTruthy('1');

    expect(actual).toBe(expected);
  });

  test('Returns a function which negates the result to true', () => {
    const expected: boolean = true;

    const notFalsey: (string) => boolean = negate((v: string): string => v);
    const actual: boolean = notFalsey('');

    expect(actual).toBe(expected);
  });
});
