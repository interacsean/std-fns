// @flow

/**
 * Partially apply arguments to a function from right to left.
 * @param fn {Function}
 * @param outerArgs {Array<mixed>} - Comma separated list of values.
 * @returns {function(...[Array<*>]): T}
 */
function partialRight<T>(
  fn: (...any) => T,
  ...outerArgs: Array<mixed>
): Function {
  return function(...innerArgs: Array<mixed>): T {
    return fn(...innerArgs.concat(outerArgs));
  };
}

export default partialRight;
