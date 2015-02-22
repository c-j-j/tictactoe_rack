var AjaxCallerSpy = function() { };

AjaxCallerSpy.prototype.send = function(url, responseHandler) {
  this.urlSentTo = url;
  this.responseHandlerUsed = responseHandler
};
