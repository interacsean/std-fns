function tap(
  fn,
  p
) {
  p.then(fn);
  return p;
}

module.exports = tap;
