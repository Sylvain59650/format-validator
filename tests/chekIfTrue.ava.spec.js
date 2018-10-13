import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("checkIfTrue-valids", t => {
  var inputs = [
    { i: true, fn: () => true },
    { i: false, fn: () => false }
  ];
  for (var input of inputs) {
    let result = validators.checkIfTrue(input.i, input.fn);
    t.deepEqual(result, true, input.i + " fail");
  }
});

test("checkIfTrue-invalids", t => {
  var inputs = [
    { i: true, fn: () => false }
  ];
  for (var input of inputs) {
    let result = validators.checkIfTrue(input.i, input.fn);
    t.deepEqual(result, false, input.i + " fail");
  }
});

test("checkIfTrue-complex", t => {
  var form = {
    field1: "f1",
    field2: "f2"
  };
  var inputs = [
    { i: true, o: true, fn: () => { return !validators.isEmpty(form.field1) && !validators.isEmpty(form.field2) } }
  ];
  for (var input of inputs) {
    let result = validators.checkIfTrue(input.i, input.fn);
    t.deepEqual(result, input.o, input.i + " fail");
  }
});