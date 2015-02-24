'use strict';

describe('Response Handler Tests', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'base/spec/javascript/fixtures/';
    loadFixtures('play_turn_fixture.html')
  });

  it("sets status", function(){
    JsonResponseHandler(calculateResponse());
    expect(document.getElementById("status").innerHTML).toEqual('some status');
  });

  it("updates board cells", function(){
    JsonResponseHandler(calculateResponse());
    expect(document.getElementById("cell0").innerHTML).toEqual('O');
    expect(document.getElementById("cell1").innerHTML).toEqual('X');
  });

  it("updates board parameter element", function(){
    JsonResponseHandler(calculateResponse());
    expect(document.getElementById("board_param").innerHTML).toEqual('next board param');
  });

  it("updates computer has next turn element", function(){
    JsonResponseHandler(calculateResponse());
    expect(document.getElementById("computer_going_next").innerHTML).toEqual('true');
  });

  function calculateResponse(){
    var play_turn_response = {
      "status": "some status",
      "board": [
        "O",
      "X"
        ],
      "board_param": "next board param",
      "computer_going_next": true};
    return JSON.stringify(play_turn_response)
  }
});
