// @flow

function nest(
  func: Function,
  args: Array<mixed>
): Function {
  return (...vals: Array<mixed>): any => {
    const nextArgs: Array<mixed> = args.concat(vals);
    if (nextArgs.length === func.length) {
      return func(...nextArgs);
    }

    return nest(func, nextArgs);
  };
}

/**
 * Curry a function taking arguments from left to right. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.
 * @param fn {Function}
 * @param initialArgs {Array<mixed>} - Comma separated list of arguments. Can be undefined.
 * @returns {Function}
 */
function curry(
  fn: Function,
  ...initialArgs: Array<mixed>
): Function {
  if (fn.length === 0) return fn;
  return nest(fn, initialArgs);
}

export default curry;
