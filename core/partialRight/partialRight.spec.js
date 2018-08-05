'use strict';

var _partialRight = require('./partialRight');

var _partialRight2 = _interopRequireDefault(_partialRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/partialRight', () => {
  test('apply one arg from right to left', () => {
    function add(a, b) {
      return a + b;
    }

    const expected = 5;

    const partialAdd = (0, _partialRight2.default)(add, 3);

    const actual = partialAdd(2);

    expect(actual).toBe(expected);
  });

  test('apply multiple args from right to left', () => {
    function div(a, b, c) {
      return a / (b + c);
    }

    const expected = 3;

    const partialAdd = (0, _partialRight2.default)(div, 2, 4);

    const actual = partialAdd(18);

    expect(actual).toBe(expected);
  });
});