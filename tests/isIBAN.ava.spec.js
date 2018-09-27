import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isIBAN-valids", t => {
  var inputs = [
    "AD1200012030200359100100", "AE070331234567890123456", "AL47212110090000000235698741", "AT611904300234573201",
    "AZ21NABZ00000000137010001944", "BA391290079401028494", "BE68539007547034", "BG80BNBG96611020345678",
    "BH67BMAG00001299123456", "BR9700360305000010009795493P1", "BY13NBRB3600900000002Z00AB00",
    "CH9300762011623852957", //"CR72012300000171549015",
    "CY17002001280000001200527600", "CZ6508000000192000145399", "DE89370400440532013000", "DK5000400440116243",
    "DO28BAGR00000001212453611324", "EE382200221020145685", "ES9121000418450200051332",
    "FI2112345600000785", "FO6264600001631634", "FR1420041010050500013M02606", "GB29NWBK60161331926819",
    "GE29NB0000000101904917", "GI75NWBK000000007099453", "GL8964710001000206", "GR1601101250000000012300695",
    "GT82TRAJ01020000001210029690",
    "HR1210010051863000160", "HU42117730161111101800000000", "IE29AIBK93115212345678", "IL620108000000099999999",
    "IS140159260076545510730339",
    "IT60X0542811101000000123456", "IQ98NBIQ850123456789012", "JO15AAAA1234567890123456789012", "KW81CBKU0000000000001234560101",
    "KZ86125KZT5004100100", "LB62099900000001001901229114", "LC07HEMM000100010012001200013015", "LI21088100002324013AA", "LT121000011101001000"
  ];
  for (var input of inputs) {
    let result = validators.isIBAN(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isIBAN-invalids", t => {
  var inputs = ["20041010050981672P02629", "4648592325813928"];
  for (var input of inputs) {
    let result = validators.isIBAN(input);
    t.deepEqual(result, false, input + " fail");
  }
});