// @flow

/**
 * Evaluates all arguments passed and returns the first truthy or last falsey value. It works like || operator.
 * @param args {Array<mixed>}
 * @returns {*}
 */
function or(...args: Array<mixed>): any {
  if (args.length === 1) return args[0];
  return args[0] || or(...args.slice(1));
}

export default or;
