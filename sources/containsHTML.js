function containsHTML(input) {
  return /<[^<]+>/i.test(input);
}

exports.containsHTML = containsHTML;