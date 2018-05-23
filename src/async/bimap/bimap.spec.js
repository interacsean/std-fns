// @flow

import bimap from './bimap';

describe('async/bimap', () => {
  test('should only call left fn if promise rejects', async (): Promise<any> => {
    const leftFn: Function = jest.fn();
    const rightFn: Function = jest.fn();

    try {
      await bimap(leftFn, rightFn, Promise.reject(1));

      expect(leftFn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
      expect(rightFn).not.toHaveBeenCalled();
    }
  });

  test('should only call rightFn if promise resolves', async (): Promise<any> => {
    const leftFn: Function = jest.fn();
    const rightFn: Function = jest.fn();

    await bimap(leftFn, rightFn, Promise.resolve(1));

    expect(leftFn).not.toHaveBeenCalled();
    expect(rightFn).toHaveBeenCalled();
  });
});