function isTime(input) {
  return /^([01][0-9]|2[0-3])(:[0-5][0-9]){1,2}$/.test(input);
}

exports.isTime = isTime;