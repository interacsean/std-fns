"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function compose(...fns) {
  return function (...args) {
    return fns.slice(1).reduce((result, fn) => fn(result), fns[0](...args));
  };
}

exports.default = compose;