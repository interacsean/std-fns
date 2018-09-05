"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Evaluates all arguments passed and returns the first truthy or last falsey value. It works like || operator.
 * @param args {$ReadOnlyArray<mixed>}
 * @returns {*}
 */
function or(...args) {
  if (args.length === 1) return args[0];
  return args[0] || or(...args.slice(1));
}

exports.default = or;