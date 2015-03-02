class CoffeeClient.StubAjaxCaller
  send: (url, responseHandler) ->
    this.urlSent = url
    this.responseHandlerUsed = responseHandler
