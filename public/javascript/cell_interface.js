'use strict';

var CellInterface = function(ajaxCaller, responseHandler){
  this.ajaxCaller = ajaxCaller;
  this.responseHandler = responseHandler;
}

CellInterface.prototype.cellClicked = function(cell){
  var queryParams = {
    "position":  cell,
    "board": domElement("board_param"),
    "game_type": domElement("game_type_param")
  };

  var url = CONFIG.addMoveUrl + addQueryParameters(queryParams);
  this.ajaxCaller.send(url, this.responseHandler);
}

function addQueryParameters(data)
{
  var ret = [];
  for (var d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return "?" + ret.join("&");
}

function domElement(id){
  return document.getElementById(id).innerHTML;
}
