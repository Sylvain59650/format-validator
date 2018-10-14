import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("maxlength", t => {
  var inputs = [
    { i: "1234", max: 3, exp: false },
    { i: "1", max: 1, exp: true },
    { i: "1234", max: 4, exp: true },
    { i: "1234", max: 5, exp: true },
    { i: "", max: 1, exp: true },
    { i: "123456", max: 5, exp: false }
  ];
  for (var input of inputs) {
    let result = validators.maxlength(input.i, { max: input.max });
    t.deepEqual(result, input.exp, input.i + " fail");
  }
});