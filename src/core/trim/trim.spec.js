// @flow

import trim from './trim';

describe('core/trim', () => {
  test('Should trim a string', () => {
    const expected: string = 'hello';

    const actual: string = trim('     hello \n');

    expect(actual).toBe(expected);
  });
});
