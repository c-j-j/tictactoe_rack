class CoffeeClient.GameClient
  constructor: (@ajaxCaller, @responseHandler, @temporaryStorage, @cookieStorage) ->

  cellClicked: (cell) ->
    queryParameters = {
      position: cell,
      game_type: @cookieStorage.getCookie(CoffeeClient.CONFIG.gameTypeParam)
    }

    board_representation = @temporaryStorage.getItem(CoffeeClient.CONFIG.boardParam)
    queryParameters[CoffeeClient.CONFIG.boardParam] = board_representation if board_representation?
    url = CoffeeClient.CONFIG.addMovePath + toQueryParameterString(queryParameters)
    @ajaxCaller.send(url, @responseHandler)

  toQueryParameterString = (queryParameterObj) ->
    queryParameterArray = []
    for key,value of queryParameterObj
      queryParameterArray.push("#{encodeURIComponent(key)}=#{encodeURIComponent(value)}")
    "?#{queryParameterArray.join("&")}"
