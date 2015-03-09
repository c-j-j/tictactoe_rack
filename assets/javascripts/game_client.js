'use strict';

var PLAY_TURN_PATH = '/play_turn';
var ADD_MOVE_PATH = '/add_move';
var GAME_TYPE = "game_type";

var GameClient = (function() {
  var _gameClient = function(ajaxCaller, responseHandler, storage, cookieStorage) {
    this.ajaxCaller = ajaxCaller;
    this.responseHandler = responseHandler;
    this.storage = storage;
    this.cookieStorage = cookieStorage;
  };

  _gameClient.prototype.cellClicked = function(cell) {
    var queryParams = {
      "position": cell,
      "game_type": cookieStorage.getCookie(GAME_TYPE)
    };

    if(this.storage.getItem("board_param") !== undefined){
      queryParams["board"] = this.storage.getItem("board_param");
    }

    var url = ADD_MOVE_PATH + addQueryParameters(queryParams);
    this.ajaxCaller.send(url, this.responseHandler);
  };

  //_gameClient.prototype.playTurn = function() {
    //var queryParams = {
      //"board": domElement("board_param"),
      //"game_type": domElement("game_type_param")
    //};

    //var url = PLAY_TURN_PATH + addQueryParameters(queryParams);
    //this.ajaxCaller.send(url, this.responseHandler);
  //}

  function addQueryParameters(queryParamList) {
    var queryParamArray = [];
    for (var queryParam in queryParamList)
      queryParamArray.push(encodeURIComponent(queryParam) + "=" + encodeURIComponent(queryParamList[queryParam]));
    return "?" + queryParamArray.join("&");
  }

  function domElement(id) {
    return document.getElementById(id).innerHTML;
  }

  return _gameClient;
})(this);

