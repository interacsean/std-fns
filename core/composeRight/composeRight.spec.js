'use strict';

var _composeRight = require('./composeRight');

var _composeRight2 = _interopRequireDefault(_composeRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/composeRight', () => {

  function addS(str) {
    return str + 's';
  }

  function addWorld(str) {
    return str + ' World';
  }

  function concatenateWords(wOne, wTwo) {
    return `${wOne} ${wTwo}`;
  }

  test('should return a function', () => {
    const expected = 'function';

    const actual = (0, _composeRight2.default)(addS);

    expect(typeof actual).toBe(expected);
  });

  test('should composeRight multiple functions', () => {
    const expected = 'Hellos World';

    const fn = (0, _composeRight2.default)(addWorld, addS);

    const actual = fn('Hello');

    expect(actual).toBe(expected);
  });

  test('Function takes many arguments', () => {
    const expected = 'The Wayne\'s World';
    const fn = (0, _composeRight2.default)(addWorld, addS, concatenateWords);

    const actual = fn('The', 'Wayne\'');

    expect(actual).toBe(expected);
  });
});