// @flow

/**
 * Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.
 * @param fn {(any) => any}
 * @param p {Promise<T>}
 * @returns {Promise<T>}
 */
function lmap<T, E>(
  fn: (any) => any,
  p: Promise<T>
): Promise<T> {
  return p.catch((e: any): Promise<T> => Promise.reject(fn(e)));
}

export default lmap;
