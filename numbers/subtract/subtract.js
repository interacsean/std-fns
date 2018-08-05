"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function subtract(...numbers) {
  return numbers.reduce((result, val) => result - val);
}

exports.default = subtract;