function isMobilePhoneFr(input) {
  return /^(0)[67]\d{8}$/.test(input);
}

exports.isMobilePhoneFr = isMobilePhoneFr;