import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isISSN-valids", t => {
  var inputs = ["0395-2037", "0317-8471", "317-8471", "1050-124X"];
  for (var input of inputs) {
    let result = validators.isISSN(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isISSN-invalids", t => {
  var inputs = ["0395-2036<", ""];
  for (var input of inputs) {
    let result = validators.isISSN(input);
    t.deepEqual(result, false, input + " fail");
  }
});