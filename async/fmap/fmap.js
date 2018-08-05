"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fmap(fn, p) {
  return p.then(fn);
}

exports.default = fmap;