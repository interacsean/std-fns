// @flow

/**
 * Creates a function which negates the value of the result.
 * Works like the ! operator on the result of the function provided
 * @param fn {Function}
 * @returns {function(...[Array<*>]): boolean}
 */
function negate(fn: Function): Function {
  return function negated(...args: Array<mixed>): boolean {
    return !fn(...args);
  };
}

export default negate;
