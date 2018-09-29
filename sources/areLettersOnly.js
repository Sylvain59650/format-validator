function areLettersOnly(input) {
  return /^[a-z]+$/i.test(input);
}

exports.areLettersOnly = areLettersOnly;