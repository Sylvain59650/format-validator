// ISO 9362

function isBIC(input) {
  return /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(input);
}

exports["isBIC"] = isBIC;