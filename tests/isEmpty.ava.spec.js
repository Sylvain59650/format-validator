import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isEmpty-valids", t => {
  var inputs = [
    { i: "" },
    { i: "  ", opt: { ignore_spaces: true } },
    { i: " \n ", opt: { ignore_spaces: true } },
    { i: "", opt: { ignore_spaces: false } },
    { i: "\t", opt: { ignore_spaces: true } }
  ];
  for (var input of inputs) {
    let result = validators.isEmpty(input.i, input.opt);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isEmpty-invalids", t => {
  var inputs = [
    { i: " ", opt: {} },
    { i: "r" },
    { i: " ", opt: { ignore_spaces: false } }
  ];
  for (var input of inputs) {
    let result = validators.isEmpty(input.i, input.opt);
    t.deepEqual(result, false, input + " fail");
  }
});