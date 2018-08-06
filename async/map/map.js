"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Map over the value of a promise. The map function will only be called if the promise is resolved.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function map(fn, p) {
  return p.then(fn);
}

exports.default = map;