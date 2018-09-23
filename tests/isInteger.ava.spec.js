import { test } from "ava";
var validators = require("../distrib/validators.min.js");

test("isInteger-valids", t => {
  var inputs = ["123", "45678901234567890123456", "0", "5789"];
  for (var input of inputs) {
    let result = validators.isInteger(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isInteger-invalids", t => {
  var inputs = ["", "-5", "5.2", "5,2", " 5", "one", "5;2", " "];
  for (var input of inputs) {
    let result = validators.isInteger(input);
    t.deepEqual(result, false, input + " fail");
  }
});