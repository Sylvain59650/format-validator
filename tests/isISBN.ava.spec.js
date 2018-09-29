import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isISBN-valids", t => {
  var inputs = ["4719512002889"];
  for (var input of inputs) {
    let result = validators.isISBN(input, "0123456789");
    t.deepEqual(result, true, input + " fail");
  }
});

test("isISBN-invalids", t => {
  var inputs = ["il etait une fois", "cendrillon au pays", "des merveilles"];
  for (var input of inputs) {
    let result = validators.isISBN(input, "abcdefghijklmnopqrstuvwxyz ");
    t.deepEqual(result, false, input + " fail");
  }
});