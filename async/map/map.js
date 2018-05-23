function map(
  fn,
  p
) {
  return p.then(fn);
}

module.exports = map;
