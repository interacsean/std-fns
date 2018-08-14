// @flow

import inst from './inst';

describe('core/inst', () => {
  test('Calls instance method of an value passed', () => {
    const expected: string = 'Peter Parker';

    const instance: Object = {
      name: 'Peter Parker',
      getName(): string {
        return this.name;
      }
    };

    const actual: ?string = inst('getName', instance);

    expect(actual).toBe(expected);
  });
});
