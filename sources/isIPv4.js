function isIPv4(input) {
  if (!/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(input)) {
    return false;
  }
  var tokens = input.split(".");
  for (var i = 0; i < tokens.length; i++) {
    if (parseInt(tokens[i], 10) > 255) {
      return false;
    }
  }
  return true;
}

exports.isIPv4 = isIPv4;