"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function bimap(leftFn, rightFn, p) {
  return p.then(rightFn, leftFn);
}

exports.default = bimap;