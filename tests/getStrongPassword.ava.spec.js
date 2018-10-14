import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("getStrongPassword---1", t => {
  var inputs = ["123asd^P*", "PdsaH2313123"];
  for (var input of inputs) {
    let result = validators.getStrongPassword(input, { acceptings: "123asdP*" });
    t.deepEqual(result, -1, input + " fail");
  }
});

test("getStrongPassword-0", t => {
  var inputs = ["123asd", "4", "jkM%50L"];
  for (var input of inputs) {
    let result = validators.getStrongPassword(input);
    t.deepEqual(result, 0, input + " fail");
  }
});


test("getStrongPassword-1", t => {
  var inputs = ["lkjhgfrty", "uiolk%jk"];
  for (var input of inputs) {
    let result = validators.getStrongPassword(input);
    t.deepEqual(result, 1, input + " fail");
  }
});

test("getStrongPassword-2", t => {
  var inputs = ["njk*Muyf"];
  for (var input of inputs) {
    let result = validators.getStrongPassword(input);
    t.deepEqual(result, 2, input + " fail");
  }
});

test("getStrongPassword-3", t => {
  var inputs = ["uipl5$P4"];
  for (var input of inputs) {
    let result = validators.getStrongPassword(input);
    t.deepEqual(result, 3, input + " fail");
  }
});

test("getStrongPassword-4", t => {
  var inputs = ["uiPyu=opl5$P"];
  for (var input of inputs) {
    let result = validators.getStrongPassword(input);
    t.deepEqual(result, 4, input + " fail");
  }
});