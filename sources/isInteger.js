function isInteger(input, options) {
  options = options || {};
  const intWithoutZero = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
  const intWithZero = /^[-+]?[0-9]+$/;

  var regex = (
    (options.hasOwnProperty("allow_leading_zeroes") && !options.allow_leading_zeroes) ? intWithoutZero : intWithZero
  );
  if (!regex.test(input)) {
    return false;
  }
  input = parseInt(input, 10);

  return (!options.hasOwnProperty("min") || input >= options.min) &&
    (!options.hasOwnProperty("max") || input <= options.max);
}

exports.isInteger = isInteger;