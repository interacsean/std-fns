"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function partial(fn, ...args) {
  return fn.bind(null, ...args);
}

exports.default = partial;