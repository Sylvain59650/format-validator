var getJSON = function(url, onSuccess, onError, options) {
  var request = new XMLHttpRequest();
  if (typeof options !== "undefined" && options != null) {
    if (options.forceReload) {
      var rnd = Math.random();
      url += (url.indexOf("?") === -1) ? "?" : "&";
      url += "___t=" + rnd;
    }
  }
  request.open("GET", url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      if (onSuccess) {
        var result = "";
        if (request.status === 200) {
          if (isDef(request.responseText) && request.responseText !== "") {
            result = JSON.parse(request.responseText);
          } else {
            result = "{}";
          }
        }
        onSuccess(result);

      }
    } else {
      console.error("ajax error", request);
      if (onError) {
        onError(request);
      }
    }
  };
  request.send();
}

function isValid(input, options) {
  var url = options.templateUrl.replace("%value%", input);
  getJSON(url, options.onResponse, options.onError);
}


exports.isValid = isValid;