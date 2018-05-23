const map = require('./map');

describe('async/map', () => {
  function inc(n) {
    return n + 1;
  }

  test('should map over a promise', async () => {
    const expected = 2;

    const actual = map(inc, Promise.resolve(1));

    return expect(actual).resolves.toBe(expected);
  });

  test('shouldn\'t call map if promise rejects', async () => {
    const fn = jest.fn();

    try {
      await map(fn, Promise.reject(1));
      expect(fn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });
});
