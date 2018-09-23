import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isLuhn-valids", t => {
  var inputs = ["4979588937806985", "33680019933"];
  for (var input of inputs) {
    let result = validators.isLuhn(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isLuhn-invalids", t => {
  var inputs = ["4979588937806986", "06-01-02-03-04"];
  for (var input of inputs) {
    let result = validators.isLuhn(input);
    t.deepEqual(result, false, input + " fail");
  }
});