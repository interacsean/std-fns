// @flow

/**
 * Creates a function which always returns the same value.
 * @param val {*}
 * @returns {function(): T}
 */
function always<T>(val: T): Function {
  return function alwaysValue(): T {
    return val;
  };
}

export default always;
