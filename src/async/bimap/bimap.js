// @flow

/**
 * Map over the success or error of a promise.
 * @param leftFn {Function}
 * @param rightFn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function bimap<T>(
  leftFn: (Error) => any,
  rightFn: (T) => any,
  p: Promise<T>
): Promise<T> {
  return p.then(rightFn, leftFn);
}

export default bimap;
