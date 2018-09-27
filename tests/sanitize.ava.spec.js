import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("sanitize", t => {
  var inputs = [
    { i: "123", o: "123" },
    { i: "45678901234567890123456", o: "45678901234567890123456" },
    { i: "1 73 02 59 650 ", o: "1730259650" },
    { i: "1-73-02-59-650", o: "1730259650" }
  ];
  for (var input of inputs) {
    let result = validators.sanitize(input.i, { keepChars: "1234567890" });
    t.deepEqual(result, input.o, "'" + input.i + "' => '" + result + "' but '" + input.o + "' expected");
  }
});