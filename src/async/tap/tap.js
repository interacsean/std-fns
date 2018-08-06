// @flow

/**
 * Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.
 * @param fn {Function}
 * @param p {Promise<T>}
 * @returns {Promise<T>}
 */
function tap<T>(
  fn: (T) => void,
  p: Promise<T>
): Promise<T> {
  p.then(fn);
  return p;
}

export default tap;
