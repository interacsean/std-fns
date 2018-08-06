"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Subtract all numbers passed into the function. It will subtract from left to right, first argument minus the second and then the product minus the next argument and so on.
 * @param numbers {Array<number>} - Comma separated list of values.
 * @returns {number}
 */
function subtract(...numbers) {
  return numbers.reduce((result, val) => result - val);
}

exports.default = subtract;