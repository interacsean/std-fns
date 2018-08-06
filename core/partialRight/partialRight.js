"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Partially apply arguments to a function from right to left.
 * @param fn {Function}
 * @param outerArgs {Array<mixed>} - Comma separated list of values.
 * @returns {function(...[Array<*>]): T}
 */
function partialRight(fn, ...outerArgs) {
  return function (...innerArgs) {
    return fn(...innerArgs.concat(outerArgs));
  };
}

exports.default = partialRight;