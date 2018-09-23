import { test } from "ava";
var validators = require("../distrib/validators.min.js");

test("isEAN13-valids", t => {
  var inputs = ["4719512002889"];
  for (var input of inputs) {
    let result = validators.isEAN13(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isEAN13-invalids", t => {
  var inputs = ["4719512002880"];
  for (var input of inputs) {
    let result = validators.isEAN13(input);
    t.deepEqual(result, false, input + " fail");
  }
});