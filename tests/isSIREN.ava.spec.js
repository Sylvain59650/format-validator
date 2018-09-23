import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("siren-valids", t => {
  var inputs = [
    "732829320",
    "552100554",
    "356000000"
  ];
  for (var input of inputs) {
    let result = validators.isSIREN(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("siren-invalids", t => {
  var inputs = [
    "732829321",
    "552100555",
    "123",
    "PMR456789",
    "732-293-0",
    ""
  ];
  for (var input of inputs) {
    let result = validators.isSIREN(input);
    t.deepEqual(result, false, input + " fail");
  }
});

test("siret-valids", t => {
  var inputs = [
    "73282932012345",
    "55210055498765",
    "35600031514181",
    "35600000032574",
    "35600000049837",
    "40483304800022"
  ];
  for (var input of inputs) {
    let result = validators.isSIRET(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("siret-invalids", t => {
  var inputs = [
    "73282932112345",
    "55210055598765",
    "123",
    "PMR456789",
    "732-293-0",
    "",
    // "35600000032573"
  ];
  for (var input of inputs) {
    let result = validators.isSIRET(input);
    t.deepEqual(result, false, input + " fail");
  }
});