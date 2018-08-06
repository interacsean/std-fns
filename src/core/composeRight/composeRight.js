// @flow

/**
 * Compose a function from all functions passed as arguments from right to left.
 * @param fns {Function}
 * @returns {function(...[Array<*>]): Function}
 */
function composeRight(...fns: Array<Function>): Function {
  return function(...args: Array<mixed>): any {
    const reversedFns: Array<Function> = fns.reverse();

    return reversedFns
      .slice(1)
      .reduce((
        result: any,
        fn: Function
      ): any => fn(result), reversedFns[0](...args));
  };
}

export default composeRight;
