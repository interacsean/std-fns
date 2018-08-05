'use strict';

var _subtract = require('./subtract');

var _subtract2 = _interopRequireDefault(_subtract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('numbers/subtract', () => {
  test('subtracts multiple numbers', () => {
    const expected = 2;

    const actual = (0, _subtract2.default)(12, 2, 5, 3);

    expect(actual).toBe(expected);
  });

  test('single number returns the number', () => {
    const expected = 1;

    const actual = (0, _subtract2.default)(1);

    expect(actual).toBe(expected);
  });
});