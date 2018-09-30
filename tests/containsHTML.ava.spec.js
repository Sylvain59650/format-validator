import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("containsHTML-valids", t => {
  var inputs = [
    "<div *>",
    "bla bla\n<p something>",
    "some\n\n<div\n\t\r>",
    "\n\n<script fdfd>{}</script>\n"
  ];
  for (var input of inputs) {
    let result = validators.containsHTML(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("containsHTML-invalids", t => {
  var inputs = [
    "casa del papas htp://www.google.fr jag",
    "cold\ncase\nhttp:://www.google.fr",
    "<", ">"
  ];
  for (var input of inputs) {
    let result = validators.containsHTML(input);
    t.deepEqual(result, false, input + " fail");
  }
});