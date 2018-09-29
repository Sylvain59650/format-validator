const cardTypes = [
  { type: "MasterCard", reg: /^(5[12345])/, minLength: 16, maxLength: 16 },
  { type: "VISA", reg: /^(4)/, minLength: 13, maxLength: 16 },
  { type: "Amex", reg: /^(3[47])/, minLength: 16, maxLength: 16 },
  { type: "DinersClub", reg: /^(3(0[012345]|[68]))/, minLength: 16, maxLength: 16 },
  { type: "enRoute", reg: /^(2(014|149))/, minLength: 16, maxLength: 16 },
  { type: "Discover", reg: /^(6011)/, minLength: 16, maxLength: 16 },
  { type: "JCB", reg: /^(3)|^(2131|1800)/, minLength: 15, maxLength: 16 }
]


function isCreditCard(str, type) {
  var l = str.length;
  if (l < 13 || l > 16) { return false; }
  if (!isLuhn(str)) { return false; }
  if (type !== undefined) {
    var found = cardTypes.filter(function(x) { return x.type === type });
    if (found != null && found.length === 1) {
      found = found[0];
      return l >= found.minLength && l <= found.maxLength && found.reg.test(str);
    }
  }
  return true;
}

exports.isCreditCard = isCreditCard;