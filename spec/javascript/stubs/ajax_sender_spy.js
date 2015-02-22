var AjaxSenderSpy = function() { };

AjaxSenderSpy.prototype.send = function(url, responseHandler) {
  this.urlSentTo = url;
  this.responseHandlerUsed = responseHandler
};
