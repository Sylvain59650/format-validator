import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("equals", t => {
  var inputs = [
    { i: "1234", i2: "1234", exp: true },
    { i: "1", i2: "1", exp: true },
    { i: "1234", i2: "124", exp: false },
    { i: "", i: "1", exp: false }
  ];
  for (var input of inputs) {
    let result = validators.equals(input.i, input.i2);
    t.deepEqual(result, input.exp, input.i + " fail");
  }
});