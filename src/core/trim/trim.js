// @flow

/**
 * Trims a string. Works like the string trim method.
 * @param val
 * @returns {string}
 */
function trim(val: string): string {
  return String.prototype.trim.call(val);
}

export default trim;
