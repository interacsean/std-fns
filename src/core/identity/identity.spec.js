// @flow

import identity from './identity';

describe('core/identity', () => {
  test('should return identity of value', () => {
    const expected: number = 1;

    const actual: number = identity(expected);

    expect(actual).toBe(expected);
  });
});
