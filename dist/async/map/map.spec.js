'use strict';

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('async/map', () => {
  function inc(n) {
    return n + 1;
  }

  test('should map over a promise', async () => {
    const expected = 2;

    const actual = (0, _map2.default)(inc, Promise.resolve(1));

    return expect(actual).resolves.toBe(expected);
  });

  test('shouldn\'t call map if promise rejects', async () => {
    const fn = jest.fn();

    try {
      await (0, _map2.default)(fn, Promise.reject(1));
      expect(fn).not.toHaveBeenCalled();
    } catch (e) {
      expect(e).not.toBeUndefined();
    }
  });
});