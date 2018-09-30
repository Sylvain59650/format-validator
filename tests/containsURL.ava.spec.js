import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("containsURL-valids", t => {
  var inputs = [
    "bla bla car http://wwww.google.fr amazon",
    "google\nhttps://www.google.fr\n facebook",
    "clubic\twww.google.fr",
    "developpez\n\nhttp://m.google.fr\ttrucbidule",
    "how i met your mother\t\rhttp://google.fr/search?q=ff&\n",
    "zorro http://123.255.102.123/ monk"
  ];
  for (var input of inputs) {
    let result = validators.containsURL(input);
    t.deepEqual(result, true, input + " fail");
  }
});

// test("containsURL-invalids", t => {
//   var inputs = [
//     "casa del papas htp://www.google.fr jag",
//     "cold\ncase\nhttp:://www.google.fr",
//     "24h\thttp:// chrono"
//   ];
//   for (var input of inputs) {
//     let result = validators.containsURL(input);
//     t.deepEqual(result, false, input + " fail");
//   }
// });