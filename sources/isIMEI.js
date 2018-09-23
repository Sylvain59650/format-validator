function isIMEI(input) {
  return input.length === 15 && isInteger(input) && isLuhn(input);
}

exports["isIMEI"] = isIMEI;