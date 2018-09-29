import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isURL-valids", t => {
  var inputs = [
    "http://wwww.google.fr",
    "https://www.google.fr",
    "www.google.fr",
    "http://m.google.fr",
    "http://google.fr/search?q=ff&",
    "http://123.255.102.123/"
  ];
  for (var input of inputs) {
    let result = validators.isURL(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isURL-invalids", t => {
  var inputs = [
    "htp://www.google.fr",
    "http:://www.google.fr",
    "http://"
  ];
  for (var input of inputs) {
    let result = validators.isURL(input);
    t.deepEqual(result, false, input + " fail");
  }
});