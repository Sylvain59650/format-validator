function handleSpecialCodes(nirpp) {
  if (nirpp.indexOf('A') !== -1) {
    return {
      withoutLetters: nirpp.replace("A", "0"),
      offset: 1000000
    };
  }

  if (nirpp.indexOf('B') !== -1) {
    return {
      withoutLetters: nirpp.replace("B", "0"),
      offset: 2000000
    };
  }

  return {
    withoutLetters: nirpp,
    offset: 0
  };
}

function parse(nirpp) {
  var _handleSpecialCodes = handleSpecialCodes(nirpp);
  var withoutLetters = _handleSpecialCodes.withoutLetters;
  var offset = _handleSpecialCodes.offset;

  return parseInt(withoutLetters, 10) - offset;
}

function generateControlKey(nirpp) {
  return 97 - parse(nirpp) % 97;
}

function decompose(input) {
  return {
    sexe: parseInt(input.slice(0, 1), 10),
    an: parseInt(input.slice(1, 3), 10),
    mois: parseInt(input.slice(3, 5), 10),
    dept: input.slice(5, 7),
    ville: parseInt(input.slice(7, 10), 10),
    ordre: parseInt(input.slice(10, 13), 10),
    key: parseInt(input.slice(-2), 10)
  }
}

function isNIR(input) {
  if (input.length != 15) {
    return false;
  }
  try {
    var dec = decompose(input);
    if (!(dec.sexe === 1 || dec.sexe === 2 || dec.sexe === 8)) { return false; }
    //if (dec.mois>12) {return false;}

    var computedKey = generateControlKey(input.slice(0, 13));
    return computedKey === dec.key;
  } catch (e) { return false; }
}

exports["isNIR"] = isNIR;