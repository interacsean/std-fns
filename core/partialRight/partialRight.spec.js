const partialRight = require('./partialRight');

describe('core/partialRight', () => {
  test('apply one arg from right to left', () => {
    function add(
      a,
      b
    ) {
      return a + b;
    }

    const expected = 5;

    const partialAdd = partialRight(add, 3);

    const actual = partialAdd(2);

    expect(actual).toBe(expected);
  });

  test('apply multiple args from right to left', () => {
    function div(
      a,
      b,
      c
    ) {
      return a / (b + c);
    }

    const expected = 3;

    const partialAdd = partialRight(div, 2, 4);

    const actual = partialAdd(18);

    expect(actual).toBe(expected);
  });
});