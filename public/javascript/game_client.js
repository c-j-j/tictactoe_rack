'use strict';

var urlFactory = new URLFactory(new Storage());
var PLAY_TURN_PATH = '/play_turn';

var GameClient = function(ajaxCaller, responseHandler){
  this.ajaxCaller = ajaxCaller;
  this.responseHandler = responseHandler;
}

GameClient.prototype.cellClicked = function(cell){
  var queryParams = {
    "position":  cell,
    "board": domElement("board_param"),
    "game_type": domElement("game_type_param")
  };

  var url = urlFactory.getAddMoveURL() + addQueryParameters(queryParams);
  this.ajaxCaller.send(url, this.responseHandler);
}

GameClient.prototype.playTurn = function(){
  var queryParams = {
    "board": domElement("board_param"),
    "game_type": domElement("game_type_param")
  };

  var url = PLAY_TURN_PATH + addQueryParameters(queryParams);
  this.ajaxCaller.send(url, this.responseHandler);
}

function addQueryParameters(queryParamList) {
  var queryParamArray = [];
  for (var queryParam in queryParamList)
    queryParamArray.push(encodeURIComponent(queryParam) + "=" + encodeURIComponent(queryParamList[queryParam]));
  return "?" + queryParamArray.join("&");
}

function domElement(id) {
  return document.getElementById(id).innerHTML;
}

var gameClient = new GameClient(new AjaxSender, JsonResponseHandler);
