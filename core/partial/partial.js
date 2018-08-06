"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Partially apply arguments to a function from left to right.
 * @param fn {Function}
 * @param args {Array<mixed>} - Comma separated list of values.
 * @returns {function(...[Array<*>]): T}
 */
function partial(fn, ...args) {
  return fn.bind(null, ...args);
}

exports.default = partial;