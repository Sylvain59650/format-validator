function isEmail(input) {
  return !/@.*@.*/.test(input) &&
    !/\s/.test(input) &&
    !/\.@/.test(input) &&
    !/\.\./.test(input) &&
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    .test(input);
}

exports.isEmail = isEmail;