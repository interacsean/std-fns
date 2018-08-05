// @flow

function compose(...fns: Array<Function>): Function {
  return function(...args: Array<mixed>): any {
    return fns
      .slice(1)
      .reduce((
        result: any,
        fn: Function
      ): any => fn(result), fns[0](...args));
  };
}

export default compose;
