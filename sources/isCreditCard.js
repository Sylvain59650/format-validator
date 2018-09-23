function isCreditCard(str) {
  return (str.length === 15 || str.length === 16) && isLuhn(str);
}

exports["isCreditCard"] = isCreditCard;