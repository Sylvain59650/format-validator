import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isTrashEmail-valids", t => {
  var inputs = [
    "eqemisy-1924@yopmail.com"
  ];
  validators.setTrashEmailsServer(["yopmail.com"]);
  for (var input of inputs) {
    let result = validators.isTrashEmail(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isTrashEmail-invalids", t => {
  var inputs = [
    "slongepee@laposte.net"
  ];
  validators.setTrashEmailsServer(["yopmail.com"]);
  for (var input of inputs) {
    let result = validators.isTrashEmail(input);
    t.deepEqual(result, false, input + " fail");
  }
});