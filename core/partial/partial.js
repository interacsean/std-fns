function partial(
  fn,
  ...args
) {
  return fn.bind(null, ...args);
}

module.exports = partial;
