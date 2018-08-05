'use strict';

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/identity', () => {
  test('should return identity of value', () => {
    const expected = 1;

    const actual = (0, _identity2.default)(expected);

    expect(actual).toBe(expected);
  });
});