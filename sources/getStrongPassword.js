function getStrongPassword(input, acceptings) {
  var strength = 0;
  if (input.length < 8) {
    return 0;
  }

  if (acceptings && !areIn(input, acceptings)) {
    return -1;
  }
  if (input.length > 8) strength += 1
    // If password contains both lower and uppercase characters, increase strength value.
  if (input.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    // If it has numbers and characters, increase strength value.
  if (input.match(/([a-zA-Z])/) && input.match(/([0-9])/)) strength += 1
    // If it has one special character, increase strength value.
  if (input.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // If it has two special characters, increase strength value.
  if (input.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
  return strength;
}

exports.getStrongPassword = getStrongPassword;