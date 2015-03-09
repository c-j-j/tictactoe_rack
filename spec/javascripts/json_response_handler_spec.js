'use strict';

describe('Response Handler Tests', function(){

  var jsonResponseHandler;

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    loadFixtures('play_turn_fixture.html');
    var cookieStorage = new CookieStorage();
    jsonResponseHandler = new JsonResponseHandler(cookieStorage);
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

  it("updates board stored in cookie", function(){
    jsonResponseHandler.parse(calculateResponse());
    expect(cookieStorage.getCookie(BOARD)).toEqual('next board param');
  });

  it("updates computer stored in cookie", function(){
    jsonResponseHandler.parse(calculateResponse());
    expect(cookieStorage.getCookie(COMPUTER_GOING_NEXT)).toEqual('true');
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
    return JSON.stringify(play_turn_response);
  }
});
