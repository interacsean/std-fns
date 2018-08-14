'use strict';

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/trim', () => {
  test('Should trim a string', () => {
    const expected = 'hello';

    const actual = (0, _trim2.default)('     hello \n');

    expect(actual).toBe(expected);
  });
});