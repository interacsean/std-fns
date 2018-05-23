"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function map(fn, p) {
  return p.then(fn);
}

exports.default = map;