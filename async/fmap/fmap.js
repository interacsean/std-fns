"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Map over the value of a promise. The function provided should return another Promise.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function fmap(fn, p) {
  return p.then(fn);
}

exports.default = fmap;