class CoffeeClient.GameClient
  constructor: (@ajaxCaller, @responseHandler, @temporaryStorage, @cookieStorage) ->

  cellClicked: (cell) ->
    queryParameters = {
      position: cell,
      game_type: @cookieStorage.getCookie(CoffeeClient.CONFIG.gameType)
    }

    board_representation = @temporaryStorage.getItem(CoffeeClient.CONFIG.board_param)
    queryParameters[CoffeeClient.CONFIG.board_param] = board_representation if board_representation?
    url = CoffeeClient.CONFIG.add_move_path + toQueryParameterString(queryParameters)
    @ajaxCaller.send(url, @responseHandler)

  toQueryParameterString = (queryParameterObj) ->
    queryParameterArray = []
    for key,value of queryParameterObj
      queryParameterArray.push("#{encodeURIComponent(key)}=#{encodeURIComponent(value)}")
    "?#{queryParameterArray.join("&")}"
