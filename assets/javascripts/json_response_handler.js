'use strict';

var JsonResponseHandler = (function() {

  var storage;

  var _responseHandler = function(cookieStorage) {
    storage = cookieStorage;
  };

  _responseHandler.prototype.parse = function(json) {
    var response = JSON.parse(json);
    updateDOM(response);
    updateStorage(response);
  };

  function updateDOM(response){
    updateDOMElementById("status", response.status);
    updateCells(response.board);
  };

  function updateStorage(response){
    storage.set(BOARD, response.board_param);
    storage.set(COMPUTER_GOING_NEXT, response.computer_going_next);
  };

  function updateCells(board) {
    for (var cellIndex = 0; cellIndex < board.length; cellIndex++) {
      updateDOMElementById("cell" + cellIndex, board[cellIndex]);
    }
  }

  function updateDOMElementById(idOfElement, value) {
    document.getElementById(idOfElement).innerHTML = value;
  }

  return _responseHandler;
})(this);

