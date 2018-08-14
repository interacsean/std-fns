'use strict';

var _negate = require('./negate');

var _negate2 = _interopRequireDefault(_negate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/negate', () => {
  test('Returns a function which negates the result to false', () => {
    const expected = false;

    const notTruthy = (0, _negate2.default)(v => v);
    const actual = notTruthy('1');

    expect(actual).toBe(expected);
  });

  test('Returns a function which negates the result to true', () => {
    const expected = true;

    const notFalsey = (0, _negate2.default)(v => v);
    const actual = notFalsey('');

    expect(actual).toBe(expected);
  });
});