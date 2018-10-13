function isDate(input, options) {
  return (toDate(input, options) != null);
}

exports.isDate = isDate;