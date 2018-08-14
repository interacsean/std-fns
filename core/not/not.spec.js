'use strict';

var _not = require('./not');

var _not2 = _interopRequireDefault(_not);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/not', () => {
  test('negates a value to false', () => {
    const expected = false;

    const actual = (0, _not2.default)(true);

    expect(actual).toBe(expected);
  });

  test('negates a value to true', () => {
    const expected = true;

    const actual = (0, _not2.default)('');

    expect(actual).toBe(expected);
  });
});