'use strict';

var _bimap = require('./bimap');

var _bimap2 = _interopRequireDefault(_bimap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('async/bimap', () => {
  test('should only call left fn if promise rejects', async () => {
    const leftFn = jest.fn();
    const rightFn = jest.fn();

    try {
      await (0, _bimap2.default)(leftFn, rightFn, Promise.reject(1));

      expect(leftFn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
      expect(rightFn).not.toHaveBeenCalled();
    }
  });

  test('should only call rightFn if promise resolves', async () => {
    const leftFn = jest.fn();
    const rightFn = jest.fn();

    await (0, _bimap2.default)(leftFn, rightFn, Promise.resolve(1));

    expect(leftFn).not.toHaveBeenCalled();
    expect(rightFn).toHaveBeenCalled();
  });
});