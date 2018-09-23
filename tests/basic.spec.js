var validators = require("../distrib/validators.min.js");

//console.log(validators.isLuhn("35600000032573", 5));
var invalid = validators.isSIRET("35600000032573");