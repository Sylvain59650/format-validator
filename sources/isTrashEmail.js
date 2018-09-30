const trashEmailsServers = ["mailox.biz", "yopmail",
  "cool.fr.nf",
  "jetable.fr.nf",
  "nospam.ze.tc",
  "nomail.xl.cx",
  "mega.zik.dj",
  "speed.1s.fr",
  "courriel.fr.nf",
  "moncourrier.fr.nf",
  "monemail.fr.nf",
  "monmail.fr.nf"
];

function loadTrashEmailServers(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      debugger;
    } else {
      console.error("ajax error", request);
    }
  };
  request.send();
}

exports.loadTrashEmailServers = loadTrashEmailServers;

function isTrashEmail(input) {
  if (trashEmailsServers.length === 0) {
    throw Error("call loadTrashEmailServers with url before call isTrashEmail");
  }
  var toks = input.split("@");
  if (toks.length !== 2) {
    throw Error(input + " is a bad email");
  }
  var server = toks[1].toLowerCase();
  return trashEmailsServers.filter(function(item) { return server.indexOf(item) >= 0; }).length > 0;
}


exports.isTrashEmail = isTrashEmail;