class CoffeeClient.AjaxCaller
  send: (url, responseHandler) ->
    xmlHttpRequest = new XMLHttpRequest()
    xmlHttpRequest.onreadystatechange = ()->
      if this.readyState == this.DONE
        responseHandler(xmlHttpRequest.responseText)

    xmlHttpRequest.open("GET", url)
    xmlHttpRequest.send()
