"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Compose a function from all functions passed as arguments from right to left.
 * @param fns {Function}
 * @returns {function(...[Array<*>]): Function}
 */
function composeRight(...fns) {
  return function (...args) {
    const reversedFns = fns.reverse();

    return reversedFns.slice(1).reduce((result, fn) => fn(result), reversedFns[0](...args));
  };
}

exports.default = composeRight;