'use strict';

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function subtract(n1, n2) {
  return n1 - n2;
}

describe('core/curryRight', () => {
  test('It should return a function per argument. After all arguments are passed, it should return the result.', () => {
    const expected = 6;

    const fn = (0, _curry2.default)(subtract);
    const fn1 = fn(12);
    const actual = fn1(6);

    expect(actual).toBe(expected);
  });

  test('it should accept values in construct', () => {
    const expected = 6;

    const fn = (0, _curry2.default)(subtract, 12);
    const actual = fn(6);

    expect(actual).toBe(expected);
  });

  test('it should accept multiple arguments when nested functions are called', () => {
    const expected = 6;

    const fn = (0, _curry2.default)(subtract);
    const actual = fn(12, 6);

    expect(actual).toBe(expected);
  });
});