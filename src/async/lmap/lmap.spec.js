// @flow

import lmap from './lmap';

describe('async/lmap', () => {
  test('should map on the left of a promise', async (): Promise<any> => {
    const expected: number = 8;
    const fn: Function = jest.fn().mockImplementation((v: number): number => expected);
    try {
      await lmap(fn, Promise.reject(4));
    } catch (e) {
      expect(fn).toHaveBeenCalled();
      expect(e).toEqual(expected);
    }
  });

  test('should not call fn if promise is successful', async (): Promise<any> => {
    const fn: Function = jest.fn();
    await lmap(fn, Promise.resolve(4));
    expect(fn).not.toHaveBeenCalled();
  });
});