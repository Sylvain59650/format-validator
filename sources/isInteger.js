function isInteger(input) {
  return /^\d+$/.test(input);
}

exports["isInteger"] = isInteger;