function decodeFormat(format) {
  if (format === "DD/MM/YYYY") {
    return { reg: /^\d{1,2}\/\d{1,2}\/\d{4}$/, d: 0, m: 1, y: 2, sp: "/" }
  } else if (format === "DD-MM-YYYY") {
    return { reg: /^\d{1,2}-\d{1,2}-\d{4}$/, d: 0, m: 1, y: 2, sp: "-" }
  } else if (format === "MM/DD/YYYY")
    return { reg: /^\d{1,2}\/\d{1,2}\/\d{4}$/, d: 1, m: 0, y: 2, sp: "/" }
  else if (format === "MM-DD-YYYY")
    return { reg: /^\d{1,2}-\d{1,2}-\d{4}$/, d: 1, m: 0, y: 2, sp: "-" }
  else if (format === "YYYY-MM-DD")
    return { reg: /^\d{4}-\d{1,2}-\d{1,2}$/, d: 2, m: 1, y: 0, sp: "-" }

}

function isDate(input, formats) {
  for (var format of formats) {
    var exp = decodeFormat(format);
    if (exp.reg.test(input)) {
      var tokens = input.split(exp.sp);
      var d = +tokens[exp.d];
      var m = +tokens[exp.m];
      var y = +tokens[exp.y];
      var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0) && m === 2) {
        monthLength[1] = 29;
      }
      if (d > 0 && d <= monthLength[m - 1] && m >= 1 && m <= 12 && y >= 0 && y <= 9999) {
        return true;
      }
    }
  }
  return false;
}

exports.isDate = isDate;