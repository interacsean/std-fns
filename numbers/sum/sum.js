"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function sum(...numbers) {
  return numbers.reduce((result, val) => result + val);
}

exports.default = sum;