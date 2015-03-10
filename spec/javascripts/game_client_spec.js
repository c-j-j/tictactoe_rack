'use strict';

describe('GameClient Tests', function(){
  var ajaxCaller;
  var gameClient;
  var storage;

  beforeEach(function(){
    ajaxCaller = new AjaxSenderSpy();
    storage = new Storage();
    storage.set(GAME_TYPE, "HVH");
    storage.set(BOARD, "stored_board_param");
    storage.set(BOARD_SIZE, "3");
    gameClient = new GameClient(ajaxCaller, 'responseHandler', storage);
  });

  it("calls ajax sender with add move url", function() {
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain(ADD_MOVE_PATH);
    expect(ajaxCaller.urlSentTo).toContain("?");
    expect(ajaxCaller.urlSentTo).toContain("position=0");
  });

  it("adds board parameter when calling add move", function(){
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('board=stored_board_param');
  });

  it('sends board size in url', function(){
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('board_size=3');
  });

  it("adds game type parameter when calling add move", function(){
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('game_type=HVH');
  });

  it("calls ajax sender with response handler", function() {
    gameClient.cellClicked(0);
    expect(ajaxCaller.responseHandlerUsed).toEqual('responseHandler');
  });

});
