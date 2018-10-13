function checkIfTrue(condition, fn) {
  return condition ? fn() : true;
}

exports.checkIfTrue = checkIfTrue;