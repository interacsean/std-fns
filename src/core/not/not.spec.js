// @flow

import not from './not';

describe('core/not', () => {
  test('negates a value to false', () => {
    const expected: boolean = false;

    const actual: boolean = not(true);

    expect(actual).toBe(expected);
  });

  test('negates a value to true', () => {
    const expected: boolean = true;

    const actual: boolean = not('');

    expect(actual).toBe(expected);
  });
});
