'use strict';

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/and', () => {
  test('Should return the last truthy value', () => {
    const expected = 1;

    const actual = (0, _and2.default)('1', [], 1);

    expect(actual).toBe(expected);
  });

  test('Should return the first falsey value', () => {
    const expected = '';

    const actual = (0, _and2.default)({}, '', [], 1);

    expect(actual).toBe(expected);
  });
});