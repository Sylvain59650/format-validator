function isISSN(input) {
  var checksum = 0;
  if (input.length === 8) {
    input = "0" + input;
  }
  if (!/^\d{4}\-?\d{3}[\dX]$/.test(input)) {
    return false;
  }
  input = input.replace("-", "");
  for (var i = 0; i < input.length; i++) {
    var digit = input[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }
  return checksum % 11 === 0;
}

exports.isISSN = isISSN;