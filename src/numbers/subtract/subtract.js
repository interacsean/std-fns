// @flow

/**
 * Subtract all numbers passed into the function. It will subtract from left to right, first argument minus the second and then the product minus the next argument and so on.
 * @param numbers {Array<number>} - Comma separated list of values.
 * @returns {number}
 */
function subtract(...numbers: Array<number>): number {
  return numbers.reduce((result: number, val: number): number => result - val);
}

export default subtract;
