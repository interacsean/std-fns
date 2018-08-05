"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function nest(func, args) {
  return (...vals) => {
    const nextArgs = args.concat(vals);
    if (nextArgs.length === func.length) {
      return func(...nextArgs.reverse());
    }

    return nest(func, nextArgs);
  };
}

function curryRight(fn, ...initialArgs) {
  if (fn.length === 0) return fn;
  return nest(fn, initialArgs);
}

exports.default = curryRight;