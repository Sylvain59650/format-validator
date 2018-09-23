import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("areDigits-valids", t => {
  var inputs = ["123", "45678901234567890123456", "0", "5789"];
  for (var input of inputs) {
    let result = validators.areDigits(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("areDigits-invalids", t => {
  var inputs = ["", "-5", "5.2", "5,2", " 5", "one", "5;2", " "];
  for (var input of inputs) {
    let result = validators.areDigits(input);
    t.deepEqual(result, false, input + " fail");
  }
});