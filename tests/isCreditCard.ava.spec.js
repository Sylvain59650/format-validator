import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isCreditCard-valids", t => {
  var inputs = [
    "4598109972801491",
    "4992947737735484",
    "4648592325813927",
    "341577289669843",
    "5397696455799499",
    "5067272964602233",
    "5248203714529196"
  ];
  for (var input of inputs) {
    let result = validators.isCreditCard(input);
    t.deepEqual(result, true, input + " fail");
  }
});


test("isCreditCard-valids-masterCards", t => {
  var inputs = [
    "5397696455799499"
  ];
  for (var input of inputs) {
    let result = validators.isCreditCard(input, "MasterCard");
    t.deepEqual(result, true, input + " fail");
  }
});

test("isCreditCard-invalids-visa", t => {
  var inputs = [
    "5397696455799499"
  ];
  for (var input of inputs) {
    let result = validators.isCreditCard(input, "VISA");
    t.deepEqual(result, false, input + " fail");
  }
});

test("isCreditCard-invalids", t => {
  var inputs = ["4979588937806986", "4648592325813928"];
  for (var input of inputs) {
    let result = validators.isCreditCard(input);
    t.deepEqual(result, false, input + " fail");
  }
});