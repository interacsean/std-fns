"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Map over the success or error of a promise.
 * @param leftFn {Function}
 * @param rightFn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function bimap(leftFn, rightFn, p) {
  return p.then(rightFn, leftFn);
}

exports.default = bimap;