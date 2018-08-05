// @flow

import compose from './compose';

describe('core/composeRight', () => {

  function addS(str: string): string {
    return str + 's';
  }

  function addWorld(str: string): string {
    return str + ' World';
  }

  function concatenateWords(
    wOne: string,
    wTwo: string
  ): string {
    return `${wOne} ${wTwo}`;
  }

  test('should return a function', () => {
    const expected: string = 'function';

    const actual: Function = compose(addS);

    expect(typeof actual).toBe(expected);
  });

  test('should composeRight multiple functions', () => {
    const expected: string = 'Hellos World';

    const fn: (string) => string = compose(addS, addWorld);

    const actual: string = fn('Hello');

    expect(actual).toBe(expected);
  });

  test('Function takes many arguments', () => {
    const expected: string = 'The Wayne\'s World';
    const fn: (
      string,
      string
    ) => string = compose(concatenateWords, addS, addWorld);

    const actual: string = fn('The', 'Wayne\'');

    expect(actual).toBe(expected);
  });
});
