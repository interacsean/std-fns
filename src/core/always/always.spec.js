// @flow

import always from './always';

describe('core/always', () => {
  test('should return the same value every time', () => {
    const expected: string = 'Me';

    const fn: () => string = always('Me');
    const actual: string = fn();

    expect(actual).toBe(expected);
  });
});
