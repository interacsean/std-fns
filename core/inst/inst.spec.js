'use strict';

var _inst = require('./inst');

var _inst2 = _interopRequireDefault(_inst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('core/inst', () => {
  test('Calls instance method of an value passed', () => {
    const expected = 'Peter Parker';

    const instance = {
      name: 'Peter Parker',
      getName() {
        return this.name;
      }
    };

    const actual = (0, _inst2.default)('getName', instance);

    expect(actual).toBe(expected);
  });
});