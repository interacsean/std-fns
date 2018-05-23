// @flow

function map<T>(
  fn: (T) => any,
  p: Promise<T>
): Promise<any> {
  return p.then(fn);
}

export default map;
