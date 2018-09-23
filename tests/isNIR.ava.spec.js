import { test } from "ava";
var validators = require("../distrib/validators.min.js");

test("nir-valids", t => {
  var inputs = ["173025965003809"];
  for (var input of inputs) {
    let result = validators.isNIR(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("nir-invalids", t => {
  var inputs = ["123456789012345", ""];
  for (var input of inputs) {
    let result = validators.isNIR(input);
    t.deepEqual(result, false, input + " fail");
  }
});