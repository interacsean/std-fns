// @flow

/**
 * Compose a function from all functions passed as arguments from right to left.
 * @param fns {Function}
 * @returns {function(...[Array<*>]): Function}
 */
function composeRight(...fns: $ReadOnlyArray<Function>): Function {
  return function(...args: $ReadOnlyArray<mixed>): any {
    const reversedFns: $ReadOnlyArray<Function> = fns.concat([]).reverse();

    return reversedFns
      .slice(1)
      .reduce((
        result: any,
        fn: Function
      ): any => fn(result), reversedFns[0](...args));
  };
}

export default composeRight;
