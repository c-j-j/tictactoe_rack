'use strict';

var GameClient = (function() {

  var ajaxCaller, responseHandler, storage;
  var _gameClient = function(_ajaxCaller, _responseHandler, _storage) {
    ajaxCaller = _ajaxCaller;
    responseHandler = _responseHandler;
    storage = _storage;
  };

  _gameClient.prototype.cellClicked = function(cell) {
    playTurn(cell);
  };

  function playTurn(cell){
    ajaxCaller.send(playTurnUrl(buildQueryParams(cell)), responseHandler);
  }

  function buildQueryParams(cell){
    var queryParams =  {
      "position": cell,
        "game_type": storage.get(GAME_TYPE),
        "board_size": storage.get(BOARD_SIZE)
    };

    appendBoardParamIfSet(queryParams);
    return queryParams;
  }

  function appendBoardParamIfSet(queryParams){
    var board_string = storage.get(BOARD);
    if(board_string !== undefined && board_string !== null){
      queryParams.board = board_string;
    }
  }

  function playTurnUrl(queryParams){
    return ADD_MOVE_PATH + addQueryParameters(queryParams);
  }

  function addQueryParameters(queryParamList) {
    var queryParamArray = [];
    for (var queryParam in queryParamList)
      queryParamArray.push(encodeURIComponent(queryParam) + "=" + encodeURIComponent(queryParamList[queryParam]));
    return "?" + queryParamArray.join("&");
  }

  return _gameClient;
})(this);

