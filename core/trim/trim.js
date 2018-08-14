"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Trims a string. Works like the string trim method.
 * @param val
 * @returns {string}
 */
function trim(val) {
  return String.prototype.trim.call(val);
}

exports.default = trim;