function bimap(
  leftFn,
  rightFn,
  p
) {
  return p.then(rightFn, leftFn);
}

module.exports = bimap;
