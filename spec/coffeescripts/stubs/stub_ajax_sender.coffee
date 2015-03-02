class CoffeeClient.StubAjaxCaller
  send: (url, responseHandler) ->
    @urlSent = url
    @responseHandlerUsed = responseHandler
