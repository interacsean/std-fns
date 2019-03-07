// @flow

import bimap from './bimap';

describe('async/bimap', () => {
  test('should only call leftFn if promise rejects', (done: Function): Promise<any> => {
    const expected: Error = new Error('error');
    const leftFn: Function = jest.fn().mockImplementation((v: number): Error => expected);
    const rightFn: Function = jest.fn();

    expect.assertions(3);

    bimap(leftFn, rightFn, Promise.reject(3))
      .then(done)
      .catch((actual: Error) => {
        expect(actual).toBe(expected);
        expect(leftFn).toHaveBeenCalled();
        expect(rightFn).not.toHaveBeenCalled();
        done();
      });
  });

  test('should only call rightFn if promise resolves', (done: Function): Promise<any> => {
    const expected: number = 6;
    const leftFn: Function = jest.fn();
    const rightFn: Function = jest.fn().mockImplementation((v: number): number => expected);

    expect.assertions(3);

    bimap(leftFn, rightFn, Promise.resolve(1))
      .then((actual: number) => {
        expect(actual).toBe(expected);
        expect(leftFn).not.toHaveBeenCalled();
        expect(rightFn).toHaveBeenCalled();
        done();
      })
      .catch(done);
  });
});
