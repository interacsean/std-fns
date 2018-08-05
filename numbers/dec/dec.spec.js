'use strict';

var _dec = require('./dec');

var _dec2 = _interopRequireDefault(_dec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('numbers/dec', () => {
  test('decrements a number by one', () => {
    const expected = 1;

    const actual = (0, _dec2.default)(2);

    expect(actual).toBe(expected);
  });
});