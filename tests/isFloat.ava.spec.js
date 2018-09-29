import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isFloat-valids", t => {
  var inputs = [
    { i: "123" },
    { i: "-123" },
    { i: "+123" },
    { i: "123.56" },
    { i: "45678901234567890123456" },
    { i: "0", opt: { min: -5, max: 10 } },
    { i: "5789" },
    { i: "8.3456" },
    { i: "0.254" },
    { i: "-0.8978979", opt: { max: 10 } },
    { i: "0005789", opt: { allow_leading_zeroes: true } }
  ];
  for (var input of inputs) {
    let result = validators.isFloat(input.i, input.opt);
    t.deepEqual(result, true, input.i + " fail");
  }
});

test("isFloat-invalids", t => {
  var inputs = [
    { i: "123", opt: { min: 10, max: 100 } },
    { i: "45rr" },
    { i: "mlm" },
    { i: "" },
    { i: "123,57" },
    { i: "123.5456", opt: { min: 200 } },
    { i: "10", opt: { min: 11, max: 20 } }
  ];
  for (var input of inputs) {
    let result = validators.isFloat(input.i, input.opt);
    t.deepEqual(result, false, input.i + " fail");
  }
});