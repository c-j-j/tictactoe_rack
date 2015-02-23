'use strict';

var JsonResponseHandler = function(json){
  var response = JSON.parse(json);
  updateDOMElementById("status", response.status);
  var board = response.board;
  updateCells(board);
  updateDOMElementById("board_param", response.board_param);
  updateDOMElementById("computer_going_next", response.computer_going_next);
}

function updateCells(board){
  for(var cellIndex = 0; cellIndex < board.length; cellIndex++){
    updateDOMElementById("cell" + cellIndex, board[cellIndex]);
  }
}

function updateDOMElementById(idOfElement, value){
  document.getElementById(idOfElement).innerHTML = value;
}


