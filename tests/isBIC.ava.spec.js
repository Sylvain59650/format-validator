import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isBIC-valids", t => {
  var inputs = [
    "DEUTDEDBDUE", "COBADEFF", "GKCCBEBB", "ATCICIAB", "GEBABEBB", "FPELFR21XXX", "PSSTFRPPNTE", "PSSTFRPPMON", "CCDQCAMM"
  ];
  for (var input of inputs) {
    let result = validators.isBIC(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isBIC-invalids", t => {
  var inputs = ["4719512002880", "3108440002610"];
  for (var input of inputs) {
    let result = validators.isBIC(input);
    t.deepEqual(result, false, input + " fail");
  }
});