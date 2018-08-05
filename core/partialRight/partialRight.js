"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function partialRight(fn, ...outerArgs) {
  return function (...innerArgs) {
    return fn(...innerArgs.concat(outerArgs));
  };
}

exports.default = partialRight;