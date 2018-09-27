var validators = require("../distrib/format-validator.min.js");

var v = validators.isIBAN("FR05 2004 1010 0509 5187 2N02 692");

console.log(v);