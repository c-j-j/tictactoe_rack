'use strict';

var CellInterface = function(ajaxCaller, responseHandler){
  this.ajaxCaller = ajaxCaller;
  this.responseHandler = responseHandler;
}

CellInterface.prototype.cellClicked = function(cell){
  this.ajaxCaller.send(CONFIG.addMoveUrl, this.responseHandler);
}


