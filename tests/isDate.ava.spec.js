import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isDate-valids", t => {
  var inputs = [
    { i: "12/02/1973", f: ["DD-MM-YYYY", "DD/MM/YYYY"] },
    { i: "12-02-1973", f: ["DD-MM-YYYY", "DD/MM/YYYY"] },
    { i: "1973-02-12", f: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] }
  ];
  for (var input of inputs) {
    let result = validators.isDate(input.i, input.f);
    t.deepEqual(result, true, input.i + " fail");
  }
});

test("isDate-invalids", t => {
  var inputs = [
    { i: "12/02/1973", f: ["DD-MM-YYYY"] },
    { i: "", f: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] },
    { i: "12/13/1973", f: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] },
    { i: "29/02/1973", f: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] },
    { i: "28/13/1973", f: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] },
  ];
  for (var input of inputs) {
    let result = validators.isDate(input.i, input.f);
    t.deepEqual(result, false, input.i + " fail");
  }
});