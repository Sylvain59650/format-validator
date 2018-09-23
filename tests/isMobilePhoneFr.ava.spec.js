import { test } from "ava";
var validators = require("../distrib/validators.min.js");

test("MobilePhoneFr-valids", t => {
  var inputs = ["0780019933", "0601020304", "0699887744"];
  for (var input of inputs) {
    let result = validators.isMobilePhoneFr(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("MobilePhoneFr-invalids", t => {
  var inputs = ["33680019933", "1234567890", "06-01-02-03-04"];
  for (var input of inputs) {
    let result = validators.isMobilePhoneFr(input);
    t.deepEqual(result, false, input + " fail");
  }
});