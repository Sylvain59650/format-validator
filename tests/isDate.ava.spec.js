import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isDate-valids", t => {
  var inputs = [
    { i: "12/02/1973", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY"] } },
    { i: "12-02-1973", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY"] } },
    { i: "1973-02-12", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] } },
    { i: "1973-02-12", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], min: new Date(1950, 0, 1) } },
    { i: "1973-02-12", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], min: new Date(1950, 0, 1), max: new Date(1980, 0, 1) } }
  ];
  for (var input of inputs) {
    let result = validators.isDate(input.i, input.options);
    t.deepEqual(result, true, input.i + " fail");
  }
});

test("isDate-invalids", t => {
  var inputs = [
    { i: "12/02/1973", options: { formats: ["DD-MM-YYYY"] } },
    { i: "", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] } },
    { i: "12/13/1973", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] } },
    { i: "29/02/1973", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] } },
    { i: "28/13/1973", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"] } },
    { i: "1973-02-12", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], min: new Date(2000, 0, 1) } },
    { i: "1973-02-12", options: { formats: ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], max: new Date(1950, 0, 1) } },
  ];
  for (var input of inputs) {
    let result = validators.isDate(input.i, input.options);
    t.deepEqual(result, false, input.i + " fail");
  }
});