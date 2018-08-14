"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Creates a function which negates the value of the result.
 * Works like the ! operator on the result of the function provided
 * @param fn {Function}
 * @returns {function(...[Array<*>]): boolean}
 */
function negate(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

exports.default = negate;