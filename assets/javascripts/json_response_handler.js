'use strict';

var JsonResponseHandler = (function() {

  var _cookieStorage;

  var _responseHandler = function(cookieStorage) {
    _cookieStorage = cookieStorage;
  };

  _responseHandler.prototype.parse = function(json) {
    var response = JSON.parse(json);
    updateDOMElementById("status", response.status);
    updateCells(response.board);

    _cookieStorage.setCookie(BOARD, response.board_param);
    _cookieStorage.setCookie(COMPUTER_GOING_NEXT, response.computer_going_next);
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

