// @flow

import tap from './tap';

describe('async/tap', () => {
  test('should call fn when promise resolves', async (): Promise<any> => {
    const fn: Function = jest.fn();

    await tap(fn, Promise.resolve(1));

    expect(fn).toHaveBeenCalled();
  });

  test('should not call fn when promise rejects', async (): Promise<any> => {
    const fn: Function = jest.fn();

    try {
      await tap(fn, Promise.reject(1));
      expect(fn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });
});
