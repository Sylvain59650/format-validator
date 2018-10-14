import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("validRegex-valids", t => {
  var inputs = [
    { i: "123", r: /\d/ },
    { i: "14:12", r: /^([01][0-9]|2[0-3])(:[0-5][0-9]){1,2}$/ }
  ];
  for (var input of inputs) {
    let result = validators.validRegex(input.i, { regex: input.r });
    t.deepEqual(result, true, input.i + " fail");
  }
});

test("validRegex-invalids", t => {
  var inputs = [
    { i: "abc", r: /\d/ }
  ];
  for (var input of inputs) {
    let result = validators.validRegex(input.i, { regex: input.r });
    t.deepEqual(result, false, input.i + " fail");
  }
});