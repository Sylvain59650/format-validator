function isISBN10(input) {
  let checksum = 0;
  let i;
  if (!/^(?:[0-9]{9}X|[0-9]{10})$/.test(input)) {
    return false;
  }
  for (i = 0; i < 9; i++) {
    checksum += (i + 1) * input.charAt(i);
  }
  if (input.charAt(9) === 'X') {
    checksum += 10 * 10;
  } else {
    checksum += 10 * input.charAt(9);
  }
  if ((checksum % 11) === 0) {
    return !!input;
  }
  return false;
}

function isISBN13(input) {
  let checksum = 0;
  let i;
  const factor = [1, 3];
  if (!/^(?:[0-9]{13})$/.test(input)) {
    return false;
  }
  for (i = 0; i < 12; i++) {
    checksum += factor[i % 2] * input.charAt(i);
  }
  if (input.charAt(12) - ((10 - (checksum % 10)) % 10) === 0) {
    return !!input;
  }
  return false;
}

function isISBN(input) {
  return isISBN10(input) || isISBN13(input);
}


exports.isISBN = isISBN;