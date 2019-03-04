// @flow

/**
 * FlatMap over the success or error of a promise.
 * @param leftFn {Function}
 * @param rightFn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function cata<T, R>(
  leftFn: (any) => R,
  rightFn: (T) => R,
  p: Promise<T>
): Promise<R> {
  return p.then(rightFn, leftFn);
}

export default cata;
