// @flow

/**
 * Map over the value of a promise. The map function will only be called if the promise is resolved.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function map<T>(
  fn: (T) => any,
  p: Promise<T>
): Promise<any> {
  return p.then(fn);
}

export default map;
