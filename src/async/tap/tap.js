// @flow

function tap<T>(
  fn: (T) => void,
  p: Promise<T>
): Promise<T> {
  p.then(fn);
  return p;
}

export default tap;
