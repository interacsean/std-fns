// @flow

function bimap<T>(
  leftFn: (Error) => any,
  rightFn: (T) => any,
  p: Promise<T>
): Promise<T> {
  return p.then(rightFn, leftFn);
}

export default bimap;
