"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function lmap(fn, p) {
  return p.catch(fn);
}

exports.default = lmap;