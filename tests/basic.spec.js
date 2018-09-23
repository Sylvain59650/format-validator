var validators = require("../distrib/format-validator.min.js");

//console.log(validators.isLuhn("35600000032573", 5));
var invalid = validators.isSIRET("35600000032573");