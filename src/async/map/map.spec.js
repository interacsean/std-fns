// @flow

import map from './map';

describe('async/map', () => {
  function inc(n: number): number {
    return n + 1;
  }

  test('should map over a promise', async (): Promise<any> => {
    const expected: number = 2;

    const actual: Promise<number> = map(inc, Promise.resolve(1));

    return expect(actual).resolves.toBe(expected);
  });

  test('shouldn\'t call map if promise rejects', async (): Promise<any> => {
    const fn: Function = jest.fn();

    try {
      await map(fn, Promise.reject(1));
      expect(fn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });
});
