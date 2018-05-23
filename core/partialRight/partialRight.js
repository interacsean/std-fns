function partialRight(
  fn,
  ...outerArgs
) {
  return function(...innerArgs) {
    return fn(...innerArgs.concat(outerArgs));
  };
}

module.exports = partialRight;
