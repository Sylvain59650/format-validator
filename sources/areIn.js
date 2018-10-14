function areIn(input, options) {
  if (!options || !options.acceptings) {
    return false;
  }
  for (var i = 0, l = input.length - 1; i <= l; i++) {
    var found = false;
    for (var j = 0; j < options.acceptings.length; j++) {
      if (input[i] === options.acceptings[j]) {
        found = true;
        break;
      }
    }
    if (!found) { return false; }
  }
  return true;
}

exports.areIn = areIn;