function isLuhn(input, modulo = 10) {
  var sum = 0;
  var tmp;
  var double = false;
  for (var i = input.length - 1; i >= 0; i--) {
    tmp = parseInt(input.charAt(i), 10);
    if (double && tmp !== 0) {
      tmp *= 2;
      if (tmp > 9) {
        tmp -= 9;
      }
    }
    double = !double;
    sum += tmp;
  }
  return ((sum % modulo) === 0);
}
exports["isLuhn"] = isLuhn;