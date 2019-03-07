// @flow

/**
 * Map over the success or error of a promise.
 * @param leftFn {(any) => any}
 * @param rightFn {(T) => any}
 * @param p {Promise<T>}
 * @returns {Promise<T>}
 */
function bimap<T>(
  leftFn: (any) => any,
  rightFn: (T) => any,
  p: Promise<T>
): Promise<T> {
  return p.then(rightFn, leftFn);
}

export default bimap;
