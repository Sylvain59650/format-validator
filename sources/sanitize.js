function sanitize(input, options) {
  var safe = input;
  if (options.keepChars) {
    var i = 0;
    var clean = "";
    for (var c of input) {
      if (options.keepChars.indexOf(c) >= 0) {
        clean += c;
      }
    }
    safe = clean;
  }
  return safe;
}

exports.sanitize = sanitize;