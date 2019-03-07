// @flow

import cata from './cata';

describe('async/cata', () => {
  test('should only call leftFn if promise rejects', async (done: Function): Promise<any> => {
    const expected: number = 0;
    const leftFn: Function = jest.fn().mockImplementation((v: number): number => expected);
    const rightFn: Function = jest.fn().mockImplementation((v: number): number => 1);

    expect.assertions(3);

    cata(leftFn, rightFn, Promise.reject(3))
      .then((actual: number) => {
        expect(actual).toBe(expected);
        expect(leftFn).toHaveBeenCalled();
        expect(rightFn).not.toHaveBeenCalled();
        done();
      })
      .catch(done);
  });

  test('should only call rightFn if promise resolves', async (done: Function): Promise<any> => {
    const expected: number = 1;
    const leftFn: Function = jest.fn().mockImplementation((v: number): number => 0);
    const rightFn: Function = jest.fn().mockImplementation((v: number): number => expected);

    expect.assertions(3);

    cata(leftFn, rightFn, Promise.resolve(1))
      .then((actual: number) => {
        expect(actual).toBe(expected);
        expect(leftFn).not.toHaveBeenCalled();
        expect(rightFn).toHaveBeenCalled();
        done();
      })
      .catch(done);
  });
});