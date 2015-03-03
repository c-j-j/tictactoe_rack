'use strict';

describe('Response Handler Tests', function(){

  var storage, jsonResponseHandler;

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    loadFixtures('play_turn_fixture.html')
    storage = new Storage()
    jsonResponseHandler = new JsonResponseHandler(storage)
  });

  it("sets status", function(){
    jsonResponseHandler.parse(calculateResponse());
    expect(document.getElementById("status").innerHTML).toEqual('some status');
  });

  it("updates board cells", function(){
    jsonResponseHandler.parse(calculateResponse());
    expect(document.getElementById("cell0").innerHTML).toEqual('O');
    expect(document.getElementById("cell1").innerHTML).toEqual('X');
  });

  it("updates board parameter element", function(){
    jsonResponseHandler.parse(calculateResponse());
    expect(storage.getItem("board_param")).toEqual('next board param');
  });

  it("updates computer has next turn element", function(){
    jsonResponseHandler.parse(calculateResponse());
    expect(storage.getItem("computer_going_next")).toEqual(true);
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
