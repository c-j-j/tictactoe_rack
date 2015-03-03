'use strict';

var JsonResponseHandler = (function() {

  var _storage;

  var _responseHandler = function(storage) {
    _storage = storage;
  };

  _responseHandler.prototype.parse = function(json) {
    var response = JSON.parse(json)
    updateDOMElementById("status", response.status);
    updateCells(response.board);

    _storage.setItem("board_param", response.board_param);
    _storage.setItem("computer_going_next", response.computer_going_next);
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

