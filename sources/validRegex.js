function validRegex(input, options) {
  return options.regex.test(input);
}

exports.validRegex = validRegex;