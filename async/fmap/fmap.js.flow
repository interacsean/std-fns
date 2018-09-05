// @flow

/**
 * Map over the value of a promise. The function provided should return another Promise.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function fmap<T>(
  fn: (any) => Promise<T>,
  p: Promise<any>
): Promise<T> {
  return p.then(fn);
}

export default fmap;
