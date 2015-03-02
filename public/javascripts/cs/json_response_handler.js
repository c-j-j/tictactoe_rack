(function() {
  var updateDOMElement;

  CoffeeClient.JsonResponseHandler = (function() {
    var updateBoardCells;

    function JsonResponseHandler() {}

    JsonResponseHandler.prototype.parse = function(json) {
      var response;
      response = JSON.parse(json);
      updateDOMElement("status", response.status);
      updateBoardCells(response.board);
      updateDOMElement("board_param", response.board_param);
      return updateDOMElement("computer_going_next", response.computer_going_next);
    };

    updateBoardCells = function(board) {
      var cellIndex, _i, _ref, _results;
      _results = [];
      for (cellIndex = _i = 0, _ref = board.length; 0 <= _ref ? _i < _ref : _i > _ref; cellIndex = 0 <= _ref ? ++_i : --_i) {
        _results.push(updateDOMElement("cell" + cellIndex, board[cellIndex]));
      }
      return _results;
    };

    return JsonResponseHandler;

  })();

  updateDOMElement = function(idOfElement, value) {
    return document.getElementById(idOfElement).innerHTML = value;
  };

}).call(this);
