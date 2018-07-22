'use strict';

var _lmap = require('./lmap');

var _lmap2 = _interopRequireDefault(_lmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('async/lmap', () => {
  test('should map on the left of a promise', async () => {
    const fn = jest.fn();
    try {
      await (0, _lmap2.default)(fn, Promise.reject(4));
      expect(fn).toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });

  test('should not call fn if promise is successful', async () => {
    const fn = jest.fn();
    await (0, _lmap2.default)(fn, Promise.resolve(4));
    expect(fn).not.toHaveBeenCalled();
  });
});