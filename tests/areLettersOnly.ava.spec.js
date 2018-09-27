import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("areLettersOnly-valids", t => {
  var inputs = [
    "azert",
    "fdfdfd",
    "FSFDSFSS",
    "sfsfsfsfFSFDSFD"
  ];
  for (var input of inputs) {
    let result = validators.areLettersOnly(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("areLettersOnly-invalids", t => {
  var inputs = ["", "-5fsf", "5.2", "fdfsdf5,2", " 5", "one1", "5;fsfs2", " "];
  for (var input of inputs) {
    let result = validators.areLettersOnly(input);
    t.deepEqual(result, false, input + " fail");
  }
});