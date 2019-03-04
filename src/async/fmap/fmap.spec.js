// @flow

import fmap from './fmap';

describe('async/fmap', () => {
  test('should call fmap if promise resolves and reject on inner promise', async (): Promise<any> => {
    const expected: number = 8;
    const fn: Function = jest.fn().mockImplementation((v: number): Promise<number> => Promise.reject(v * 2));

    try {
      await fmap(fn, Promise.resolve(4));
    } catch (e) {
      expect(fn).toHaveBeenCalled();
      expect(e).toBe(expected);
    }
  });

  test('should not call fmap if promise rejected', async (): Promise<any> => {
    const fn: Function = jest.fn();

    try {
      await fmap(fn, Promise.reject(2));
    } catch (e) {
      expect(fn).not.toHaveBeenCalled();
      expect(e).not.toBeUndefined();
    }
  });

  test('should call fmap if promise resolves and resolve on inner promise', async (): Promise<any> => {
    const fn: Function =  jest.fn().mockImplementation((v: number): Promise<number> => Promise.resolve(v * 2));
    const expected: number = 4;
    const actual: number = await fmap(fn, Promise.resolve(2));
    expect(actual).toBe(expected);
  });
});