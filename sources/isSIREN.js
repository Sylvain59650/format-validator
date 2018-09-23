function isSIREN(input) {
  return input.length === 9 &&
    isInteger(input) &&
    (isLuhn(input, 10));
}

exports["isSIREN"] = isSIREN;


function isSIRET(input) {
  var precheck = input.length === 14 && isInteger(input);
  var siren = input.slice(0, 9);
  return precheck && (isLuhn(siren, 10) || (siren === "356000000" && isLuhn(input, 5)));
}

exports["isSIRET"] = isSIRET;