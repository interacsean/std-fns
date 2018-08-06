"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function lmap(fn, p) {
  return p.catch(fn);
}

exports.default = lmap;