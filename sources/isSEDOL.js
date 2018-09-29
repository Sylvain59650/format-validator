function isSEDOL(text) {

  try {
    var input = text.substr(0, 6);
    var check_digit = checkKey(input);
    return text === input + check_digit;
  } catch (e) {
    return false;
  }
  return false;
}

function checkKey(num) {
  var weight = [1, 3, 1, 7, 3, 9];
  if (num.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) == -1) {
    throw "Invalid SEDOL number '" + num + "'";
  }
  var sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum += weight[i] * parseInt(num.charAt(i), 36);
  }
  var check = (10 - sum % 10) % 10;
  return check.toString();
}



exports.isSEDOL = isSEDOL;