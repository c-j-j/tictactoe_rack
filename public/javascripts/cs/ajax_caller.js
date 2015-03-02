(function() {
  CoffeeClient.AjaxCaller = (function() {
    function AjaxCaller() {}

    AjaxCaller.prototype.send = function(url, responseHandler) {
      var xmlHttpRequest;
      xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
          return responseHandler(xmlHttpRequest.responseText);
        }
      };
      xmlHttpRequest.open("GET", url);
      return xmlHttpRequest.send();
    };

    return AjaxCaller;

  })();

}).call(this);
