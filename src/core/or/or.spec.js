// @flow

import or from './or';

describe('core/or', () => {
  test('should return the first truthy value', () => {
    const expected: number = 1;

    const actual: mixed = or('', 0, 1);

    expect(actual).toBe(expected);
  });

  test('should return the last falsey value', () => {
    const expected: boolean = false;

    const actual: mixed = or(null, void 0, 0, false);

    expect(actual).toBe(expected);
  });
});
