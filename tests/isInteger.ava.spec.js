import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isInteger-valids", t => {
  var inputs = [
    { i: "123" },
    { i: "-123" },
    { i: "+123" },
    { i: "45678901234567890123456" },
    { i: "0", opt: { min: -5, max: 10 } },
    { i: "5789" },
    { i: "0005789", opt: { allow_leading_zeroes: true } }
  ];
  for (var input of inputs) {
    let result = validators.isInteger(input.i, input.opt);
    t.deepEqual(result, true, input.i + " fail");
  }
});

test("isInteger-invalids", t => {
  var inputs = [
    { i: "123", opt: { min: 10, max: 100 } },
    { i: "45rr" },
    { i: "mlm" },
    { i: "" },
    { i: "123.5" },
    { i: "123,5" },
    { i: "10", opt: { min: 11, max: 20 } },
    { i: "0005789", opt: { allow_leading_zeroes: false } }
  ];
  for (var input of inputs) {
    let result = validators.isInteger(input.i, input.opt);
    t.deepEqual(result, false, input.i + " fail");
  }
});