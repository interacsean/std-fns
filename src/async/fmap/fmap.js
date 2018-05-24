// @flow

function fmap<T>(
  fn: (any) => Promise<T>,
  p: Promise<any>
): Promise<T> {
  return p.then(fn);
}

export default fmap;
