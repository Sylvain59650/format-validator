import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isTime-valids", t => {
  var inputs = [
    "00:00", "23:59", "12:13", "02:34", "15:12:37"
  ];
  for (var input of inputs) {
    let result = validators.isTime(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isTime-invalids", t => {
  var inputs = ["", "0:00", "26:15", "21:78", "+5:12", "13:5", "14:6", "16:82:36", "17:24:89"];
  for (var input of inputs) {
    let result = validators.isTime(input);
    t.deepEqual(result, false, input + " fail");
  }
});