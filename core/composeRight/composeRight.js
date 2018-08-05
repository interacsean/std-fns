"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function composeRight(...fns) {
  return function (...args) {
    const reversedFns = fns.reverse();

    return reversedFns.slice(1).reduce((result, fn) => fn(result), reversedFns[0](...args));
  };
}

exports.default = composeRight;