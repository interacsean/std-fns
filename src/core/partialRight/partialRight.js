// @flow

function partialRight<T>(
  fn: (...any) => T,
  ...outerArgs: Array<mixed>
): Function {
  return function(...innerArgs: Array<mixed>): T {
    return fn(...innerArgs.concat(outerArgs));
  };
}

export default partialRight;
