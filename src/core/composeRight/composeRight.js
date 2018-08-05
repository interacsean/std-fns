// @flow

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
