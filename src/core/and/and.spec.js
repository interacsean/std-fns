// @flow

import and from './and';

describe('core/and', () => {
  test('Should return the last truthy value', () => {
    const expected: number = 1;

    const actual: mixed = and('1', [], 1);

    expect(actual).toBe(expected);
  });

  test('Should return the first falsey value', () => {
    const expected: string = '';

    const actual: mixed = and({}, '', [], 1);

    expect(actual).toBe(expected);
  });
});
