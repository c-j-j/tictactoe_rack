class CoffeeClient.GameClient
  constructor: (@ajaxCaller, @responseHandler) ->

  cellClicked: (cell) ->
    queryParameters = {
      position: cell,
      board: extractHTMLFromDOM("board_param")
      game_type: extractHTMLFromDOM("game_type_param")
    }

    url = CoffeeClient.CONFIG.add_move_path + toQueryParameterString(queryParameters)
    @ajaxCaller.send(url, @responseHandler)

  toQueryParameterString = (queryParameterObj) ->
    queryParameterArray = []
    for key,value of queryParameterObj
      queryParameterArray.push("#{encodeURIComponent(key)}=#{encodeURIComponent(value)}")
    "?#{queryParameterArray.join("&")}"

  extractHTMLFromDOM = (id) ->
    document.getElementById(id).innerHTML
