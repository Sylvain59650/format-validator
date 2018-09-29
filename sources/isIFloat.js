function isFloat(input, options) {
  options = options || {};
  var check = (input !== "" && input == +input && input !== (input | 0));

  return check &&
    (!options.hasOwnProperty("max") || +input <= options.max) &&
    (!options.hasOwnProperty("min") || +input >= options.min);
}

exports.isFloat = isFloat;