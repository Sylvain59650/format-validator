import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isRIB-valids", t => {
  var inputs = [
    "20041010050981672P02624"
  ];
  for (var input of inputs) {
    let result = validators.isRIB(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isRIB-invalids", t => {
  var inputs = ["20041010050981672P02629", "4648592325813928"];
  for (var input of inputs) {
    let result = validators.isRIB(input);
    t.deepEqual(result, false, input + " fail");
  }
});