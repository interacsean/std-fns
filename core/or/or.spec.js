'use strict';

var _or = require('./or');

var _or2 = _interopRequireDefault(_or);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/or', () => {
  test('should return the first truthy value', () => {
    const expected = 1;

    const actual = (0, _or2.default)('', 0, 1);

    expect(actual).toBe(expected);
  });

  test('should return the last falsey value', () => {
    const expected = false;

    const actual = (0, _or2.default)(null, void 0, 0, false);

    expect(actual).toBe(expected);
  });
});