// @flow

/**
 * Call instance method of an object.
 * @param methodName {String}
 * @param val {Object}
 * @returns {any | null}
 */
function inst(
  methodName: string,
  val: Object
): ?any {
  const fn: ?Function = val[methodName];
  return typeof fn === 'function' ? fn.call(val) : null;
}

export default inst;
