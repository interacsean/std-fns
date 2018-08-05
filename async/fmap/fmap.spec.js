'use strict';

var _fmap = require('./fmap');

var _fmap2 = _interopRequireDefault(_fmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('async/fmap', () => {
  test('should call fmap if promise resolves and reject on inner promise', async () => {
    const expected = 8;
    const fn = v => Promise.reject(v * 2);

    try {
      await (0, _fmap2.default)(fn, Promise.resolve(4));
      expect(fn).toHaveBeenCalled();
    } catch (e) {
      expect(e).toBe(expected);
    }
  });

  test('should not call fmap if promise rejected', async () => {
    const fn = jest.fn();

    try {
      await (0, _fmap2.default)(fn, Promise.reject(2));
      expect(fn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });

  test('should call fmap if promise resolves and resolve on inner promise', async () => {
    const fn = v => Promise.resolve(v * 2);
    const expected = 4;
    const actual = await (0, _fmap2.default)(fn, Promise.resolve(2));
    expect(actual).toBe(expected);
  });
});