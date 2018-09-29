function isEmpty(input, options) {
  if (!options) {
    options = { ignore_spaces: true }
  }
  if (options && options.ignore_spaces) {
    input = input.trim();
  }
  return input.length === 0;
}

exports.isEmpty = isEmpty;