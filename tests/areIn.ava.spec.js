import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("areIn-valids", t => {
  var inputs = ["123", "45678901234567890123456", "0", "5789"];
  for (var input of inputs) {
    let result = validators.areIn(input, "0123456789");
    t.deepEqual(result, true, input + " fail");
  }
});

test("areIn-valids-chars", t => {
  var inputs = ["il etait une fois", "cendrillon au pays", "des merveilles"];
  for (var input of inputs) {
    let result = validators.areIn(input, "abcdefghijklmnopqrstuvwxyz ");
    t.deepEqual(result, true, input + " fail");
  }
});

test("areIn-invalids-chars", t => {
  var inputs = ["il était une fois", "cendrillon ô pays", "des\nmerveilles"];
  for (var input of inputs) {
    let result = validators.areIn(input, "abcdefghijklmnopqrstuvwxyz ");
    t.deepEqual(result, false, input + " fail");
  }
});

test("areIn-invalids", t => {
  var inputs = ["-5", "5.2", "5,2", " 5", "one", "5;2"];
  for (var input of inputs) {
    let result = validators.areIn(input, "943");
    t.deepEqual(result, false, input + " fail");
  }
});