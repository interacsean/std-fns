"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Creates a function which always returns the same value.
 * @param val {*}
 * @returns {function(): T}
 */
function always(val) {
  return function alwaysValue() {
    return val;
  };
}

exports.default = always;