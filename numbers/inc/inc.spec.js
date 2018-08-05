'use strict';

var _inc = require('./inc');

var _inc2 = _interopRequireDefault(_inc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('numbers/dec', () => {
  test('increments a number by one', () => {
    const expected = 2;

    const actual = (0, _inc2.default)(1);

    expect(actual).toBe(expected);
  });
});