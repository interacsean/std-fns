// @flow

function partial<T>(
  fn: (...any) => T,
  ...args: Array<mixed>
): Function {
  return fn.bind(null, ...args);
}

export default partial;
