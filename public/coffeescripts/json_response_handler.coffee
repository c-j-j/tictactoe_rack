class CoffeeClient.JsonResponseHandler
  parse: (json) ->
    response = JSON.parse(json)
    updateDOMElement("status", response.status)
    updateBoardCells(response.board)
    updateDOMElement("board_param", response.board_param)
    updateDOMElement("computer_going_next", response.computer_going_next)


  updateBoardCells = (board)->
    for cellIndex in [0...board.length]
      updateDOMElement("cell#{cellIndex}", board[cellIndex])

 updateDOMElement = (idOfElement, value)->
    document.getElementById(idOfElement).innerHTML = value
