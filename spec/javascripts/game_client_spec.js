'use strict';

describe('GameClient Tests', function(){
  var ajaxCaller;
  var gameClient;
  var storage;
  var cookieStorage;

  beforeEach(function(){
    ajaxCaller = new AjaxSenderSpy();
    cookieStorage = new CookieStorage();
    cookieStorage.setCookie(GAME_TYPE, "HVH");
    cookieStorage.setCookie(BOARD, "stored_board_param");
    gameClient = new GameClient(ajaxCaller, 'responseHandler', cookieStorage);
  });

  it("creates class", function(){
    expect(gameClient.ajaxCaller).toEqual(ajaxCaller);
    expect(gameClient.responseHandler).toEqual('responseHandler');
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

  it("adds game type parameter when calling add move", function(){
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('game_type=HVH');
  });

  it("calls ajax sender with response handler", function() {
    gameClient.cellClicked(0);
    expect(ajaxCaller.responseHandlerUsed).toEqual('responseHandler');
  });
});
