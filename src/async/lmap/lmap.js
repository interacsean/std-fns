// @flow

function lmap<T>(
  fn: (T) => any,
  p: Promise<T>
): Promise<any> {
  return p.catch(fn);
}

export default lmap;
