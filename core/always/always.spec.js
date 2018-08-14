'use strict';

var _always = require('./always');

var _always2 = _interopRequireDefault(_always);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/always', () => {
  test('should return the same value every time', () => {
    const expected = 'Me';

    const fn = (0, _always2.default)('Me');
    const actual = fn();

    expect(actual).toBe(expected);
  });
});