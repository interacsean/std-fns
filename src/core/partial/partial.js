// @flow

/**
 * Partially apply arguments to a function from left to right.
 * @param fn {Function}
 * @param args {Array<mixed>} - Comma separated list of values.
 * @returns {function(...[Array<*>]): T}
 */
function partial<T>(
  fn: (...any) => T,
  ...args: Array<mixed>
): Function {
  return fn.bind(null, ...args);
}

export default partial;
