class CoffeeClient.StubAjaxCaller
  send: (url, responseHandler) ->
    @urlSentTo = url
    @responseHandlerUsed = responseHandler
