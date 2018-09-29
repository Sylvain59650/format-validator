var validators = require("../distrib/format-validator.min.js");

var v = validators.isDate("12/02/1973", ["DD-MM-YYYY", "DD/MM/YYYY"]);

console.log(v);