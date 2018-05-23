const partial = require('./partial');

describe('core/partial', () => {
  test('should partially apply one argument from left to right', () => {
    const expected = 6;

    function add(
      a,
      b,
      c
    ) {
      return a + b + c;
    }

    const partialAdd = partial(add, 1);

    const actual = partialAdd(2, 3);

    expect(actual).toBe(expected);
  });

  test('should partially apply multiple arguments from left to right', () => {
    const expected = 1;

    function acc(
      a,
      b,
      c
    ) {
      return a * b / c;
    }

    const partialAdd = partial(acc, 2, 5);

    const actual = partialAdd(10);

    expect(actual).toBe(expected);
  });
});