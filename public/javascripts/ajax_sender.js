'use strict';

var AjaxSender = (function() {
  var _ajaxSender = function() {}

  _ajaxSender.prototype.send = function(url, responseHandler) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
      if (this.readyState == this.DONE) {
        responseHandler(xmlHttpRequest.responseText);
      }
    }
    xmlHttpRequest.open("GET", url);
    xmlHttpRequest.send();
  }

  return _ajaxSender;
})(this);
