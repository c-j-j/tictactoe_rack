'use strict';

describe('GameClient Tests', function(){
  var ajaxCaller;
  var gameClient;
  var storage;

  beforeEach(function(){
    ajaxCaller = new AjaxSenderSpy();
    storage = new Storage();
    gameClient = new GameClient(ajaxCaller, 'responseHandler', storage);
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    loadFixtures('hidden_params_fixture.html');
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
    storage.setItem("board_param", "stored_board_param");
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

  //it("calls ajax sender with play turn url", function() {
    //gameClient.playTurn();
    //expect(ajaxCaller.urlSentTo).toContain('/play_turn');
  //});

  //it("adds board parameter when calling play turn", function() {
    //gameClient.playTurn();
    //expect(ajaxCaller.urlSentTo).toContain('board=some_board_param');
  //});

  //it("adds game type parameter when calling play turn", function() {
    //gameClient.playTurn();
    //expect(ajaxCaller.urlSentTo).toContain('game_type=HVH');
  //});
});
