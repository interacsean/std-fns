// @flow

/**
 * Evaluates all arguments passed and returns the first falsey or last truthy value. It works like && operator.
 * @param args {Array<mixed>}
 * @returns {*}
 */
function and(...args: Array<mixed>): any {
  if (args.length === 1) return args[0];
  return args[0] && and(...args.slice(1));
}

export default and;
