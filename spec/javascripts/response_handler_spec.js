'use strict';

describe('Response Handler Tests', function(){

  beforeEach(function(){
    //affix('h1.gameStatus')
  });

  it("creates class", function(){
    addFixture("<div id='something'></div>");

    var statusHeading = document.createElement('h1');
    statusHeading.id = "gameStatus";
    JsonResponseHandler('{"status": "some status"}');
    expect(document.getElementById("gameStatus").innerHTML).toEqual('some status');
  });
});
