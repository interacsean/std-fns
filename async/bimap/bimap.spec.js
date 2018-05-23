const bimap = require('./bimap');

describe('async/bimap', () => {
  test('should only call left fn if promise rejects', async () => {
    const leftFn = jest.fn();
    const rightFn = jest.fn();

    try {
      await bimap(leftFn, rightFn, Promise.reject(1));

      expect(leftFn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
      expect(rightFn).not.toHaveBeenCalled();
    }
  });

  test('should only call rightFn if promise resolves', async () => {
    const leftFn = jest.fn();
    const rightFn = jest.fn();

    await bimap(leftFn, rightFn, Promise.resolve(1));

    expect(leftFn).not.toHaveBeenCalled();
    expect(rightFn).toHaveBeenCalled();
  });
});