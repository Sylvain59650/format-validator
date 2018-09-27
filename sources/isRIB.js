function isRIB(str) {
  if (str.length !== 23) {
    return false;
  }
  var compte = str.slice(10, 21);
  compte = compte.replace(/[A|J]/g, "1")
    .replace(/[B|K|S]/g, "2")
    .replace(/[C|L|T]/g, "3")
    .replace(/[D|M|U]/g, "4")
    .replace(/[E|N|V]/g, "5")
    .replace(/[F|O|W]/g, "6")
    .replace(/[G|P|X]/g, "7")
    .replace(/[H|Q|Y]/g, "8")
    .replace(/[I|R|Z]/g, "9");
  var key = str.slice(21, 23);
  str = str.slice(0, 10) + compte + key;
  if (!areDigits(str)) {
    return false;
  }
  var k = parseInt(key, 10);

  var banque = str.slice(0, 5);
  var guichet = str.slice(5, 10);
  var cp = parseInt(compte, 10);
  var ki = banque % 97;
  ki = ki * 100000 + parseInt(guichet, 10);
  ki = ki % 97;
  ki = ki * Math.pow(10, 11) + cp;
  ki = ki % 97;
  ki = ki * 100;
  ki = ki % 97;
  ki = 97 - ki;
  return ki === k;
}

exports["isRIB"] = isRIB;