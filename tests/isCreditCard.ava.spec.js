import { test } from "ava";
var validators = require("../distrib/validators.min.js");

test("isCreditCard-valids", t => {
  var inputs = ["4979588937806985"];
  for (var input of inputs) {
    let result = validators.isCreditCard(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isCreditCard-invalids", t => {
  var inputs = ["4979588937806986"];
  for (var input of inputs) {
    let result = validators.isCreditCard(input);
    t.deepEqual(result, false, input + " fail");
  }
});