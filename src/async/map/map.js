// @flow

/**
 * Map over the value of a promise. The map function will only be called if the promise is resolved.
 * @param fn {Function}
 * @param p {Promise<T>}
 * @returns {Promise<T>}
 */
function map<T, R>(
  fn: (T) => R,
  p: Promise<T>
): Promise<R> {
  return p.then(fn);
}

export default map;
