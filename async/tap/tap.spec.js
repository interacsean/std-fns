'use strict';

var _tap = require('./tap');

var _tap2 = _interopRequireDefault(_tap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('async/tap', () => {
  test('should call fn when promise resolves', async () => {
    const fn = jest.fn();

    await (0, _tap2.default)(fn, Promise.resolve(1));

    expect(fn).toHaveBeenCalled();
  });

  test('should not call fn when promise rejects', async () => {
    const fn = jest.fn();

    try {
      await (0, _tap2.default)(fn, Promise.reject(1));
      expect(fn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });
});