'use strict';

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('numbers/sum', () => {
  test('sums multiple numbers', () => {
    const expected = 12;

    const actual = (0, _sum2.default)(1, 2, 3, 6);

    expect(actual).toBe(expected);
  });

  test('single number returns the number', () => {
    const expected = 1;

    const actual = (0, _sum2.default)(1);

    expect(actual).toBe(expected);
  });
});