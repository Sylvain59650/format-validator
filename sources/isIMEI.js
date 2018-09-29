function isIMEI(input) {
  return input.length === 15 && areDigits(input) && isLuhn(input);
}

exports.isIMEI = isIMEI;