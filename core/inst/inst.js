'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Call instance method of an object.
 * @param methodName {String}
 * @param val {Object}
 * @returns {any | null}
 */
function inst(methodName, val) {
  const fn = val[methodName];
  return typeof fn === 'function' ? fn.call(val) : null;
}

exports.default = inst;