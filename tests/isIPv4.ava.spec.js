import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isIPv4-valids", t => {
  var inputs = [
    "192.0.10.168", "127.0.0.1", "255.255.255.255", "0.0.0.0"
  ];
  for (var input of inputs) {
    let result = validators.isIPv4(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isIPv4-invalids", t => {
  var inputs = ["4719512002880", "255255255255", "10.0.0.999", "9.99.999.9", "0", "0.0", "1.2.3"];
  for (var input of inputs) {
    let result = validators.isIPv4(input);
    t.deepEqual(result, false, input + " fail");
  }
});