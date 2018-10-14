var trashEmailsServers = [];

function setTrashEmailsServer(array) {
  trashEmailsServers = array;
}
exports.setTrashEmailsServer = setTrashEmailsServer;

function isTrashEmail(input) {
  if (trashEmailsServers.length === 0) {
    throw Error("call setTrashEmailsServer with array string before call isTrashEmail");
  }
  var toks = input.split("@");
  if (toks.length !== 2) {
    throw Error(input + " is a bad email");
  }
  var server = toks[1].toLowerCase();
  return trashEmailsServers.filter(function(item) { return server.indexOf(item) >= 0; }).length > 0;
}


exports.isTrashEmail = isTrashEmail;