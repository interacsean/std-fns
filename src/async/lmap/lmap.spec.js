// @flow

import lmap from './lmap';

describe('async/lmap', () => {
  test('should map on the left of a promise', async (): Promise<any> => {
    const fn: Function = jest.fn();
    try {
      await lmap(fn, Promise.reject(4));
      expect(fn).toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });

  test('should not call fn if promise is successful', async (): Promise<any> => {
    const fn: Function = jest.fn();
    await lmap(fn, Promise.resolve(4));
    expect(fn).not.toHaveBeenCalled();
  });
});