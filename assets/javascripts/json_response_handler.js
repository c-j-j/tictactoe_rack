'use strict';

var JsonResponseHandler = (function() {

  var storage;

  var _responseHandler = function(cookieStorage) {
    storage = cookieStorage;
  };

  _responseHandler.prototype.parse = function(json) {
    var response = JSON.parse(json);
    updateDOMElementById("status", response.status);
    updateCells(response.board);

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

