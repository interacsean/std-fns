// @flow

/**
 * Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function lmap<T>(
  fn: (T) => any,
  p: Promise<T>
): Promise<any> {
  return p.catch(fn);
}

export default lmap;
