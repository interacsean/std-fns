"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function tap(fn, p) {
  p.then(fn);
  return p;
}

exports.default = tap;