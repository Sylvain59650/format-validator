import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isSEDOL-valids", t => {
  var inputs = ["0263494", "2936921"];
  for (var input of inputs) {
    let result = validators.isSEDOL(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isSEDOL-invalids", t => {
  var inputs = ["1234567"];
  for (var input of inputs) {
    let result = validators.isSEDOL(input);
    t.deepEqual(result, false, input + " fail");
  }
});