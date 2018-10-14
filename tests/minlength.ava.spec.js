import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("minlength", t => {
  var inputs = [
    { i: "1234", min: 3, exp: true },
    { i: "1", min: 1, exp: true },
    { i: "1234", min: 4, exp: true },
    { i: "1234", min: 5, exp: false },
    { i: "", min: 1, exp: false }
  ];
  for (var input of inputs) {
    let result = validators.minlength(input.i, { min: input.min });
    t.deepEqual(result, input.exp, input.i + " fail");
  }
});