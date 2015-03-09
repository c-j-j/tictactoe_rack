'use strict';

var GameClient = (function() {
  var _gameClient = function(ajaxCaller, responseHandler, cookieStorage) {
    this.ajaxCaller = ajaxCaller;
    this.responseHandler = responseHandler;
    this.cookieStorage = cookieStorage;
  };

  _gameClient.prototype.cellClicked = function(cell) {
    var queryParams = {
      "position": cell,
      "game_type": this.cookieStorage.getCookie(GAME_TYPE)
    };

    var board_string = this.cookieStorage.getCookie(BOARD);
    if(board_string !== undefined){
      queryParams.board = board_string;
    }

    var url = ADD_MOVE_PATH + addQueryParameters(queryParams);
    this.ajaxCaller.send(url, this.responseHandler);
  };

  function addQueryParameters(queryParamList) {
    var queryParamArray = [];
    for (var queryParam in queryParamList)
      queryParamArray.push(encodeURIComponent(queryParam) + "=" + encodeURIComponent(queryParamList[queryParam]));
    return "?" + queryParamArray.join("&");
  }

  return _gameClient;
})(this);

