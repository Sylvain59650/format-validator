function isEAN13(input) {
  var sum = 0;
  var tmp;
  var multiply = false;
  if (input.length !== 13) {
    return false;
  }
  for (var i = input.length - 1; i >= 0; i--) {
    tmp = parseInt(input.charAt(i), 10);
    if (multiply && tmp !== 0) {
      tmp *= 3;
    }
    multiply = !multiply;
    sum += tmp;
  }
  return ((sum % 10) === 0);
}

exports.isEAN13 = isEAN13;