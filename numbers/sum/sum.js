"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Sum all numbers passed into the function. It will sum from left to right, first argument plus the second and then the product plus the next argument and so on.
 * @param numbers {Array<number>} - Comma separated list of values.
 * @returns {number}
 */
function sum(...numbers) {
  return numbers.reduce((result, val) => result + val);
}

exports.default = sum;