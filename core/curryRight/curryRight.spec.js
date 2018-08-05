'use strict';

var _curryRight = require('./curryRight');

var _curryRight2 = _interopRequireDefault(_curryRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function concat(s1, s2) {
  return `${s1} ${s2}`;
}

describe('core/curryRight', () => {
  test('It should return a function per argument. After all arguments are passed, it should return the result.', () => {
    const expected = 'Hello world';

    const fn = (0, _curryRight2.default)(concat);
    const fn1 = fn('world');
    const actual = fn1('Hello');

    expect(actual).toBe(expected);
  });

  test('it should accept values in construct', () => {
    const expected = 'Hello world';

    const fn = (0, _curryRight2.default)(concat, 'world');
    const actual = fn('Hello');

    expect(actual).toBe(expected);
  });

  test('it should accept multiple arguments when nested functions are called', () => {
    const expected = 'Hello world';

    const fn = (0, _curryRight2.default)(concat);
    const actual = fn('world', 'Hello');

    expect(actual).toBe(expected);
  });
});