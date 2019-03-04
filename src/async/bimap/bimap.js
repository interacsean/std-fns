// @flow

/**
 * Map over the success or error of a promise.
 * @param leftFn {Function}
 * @param rightFn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<R | never>}
 */
function bimap<T, R, E>(
  leftFn: (E) => any,
  rightFn: (T) => R,
  p: Promise<T>
): Promise<R> {
  return p.then(rightFn, (e: E): Promise<R> => Promise.reject(leftFn(e)));
}

export default bimap;
