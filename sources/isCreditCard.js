function isCreditCard(str) {
  return str.length === 16 && isLuhn(str);
}

exports["isCreditCard"] = isCreditCard;