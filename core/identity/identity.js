"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Pass a value to a function which returns said value.
 * @param val {T}
 * @returns {T}
 */
function identity(val) {
  return val;
}

exports.default = identity;