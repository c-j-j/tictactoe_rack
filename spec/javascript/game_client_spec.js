'use strict';

describe('GameClient Tests', function(){
  var ajaxCaller;
  var gameClient;
  var urlFactory = new URLFactory(new Storage());

  beforeEach(function(){
    ajaxCaller = new AjaxSenderSpy();
    gameClient = new GameClient(ajaxCaller, 'responseHandler');
    jasmine.getFixtures().fixturesPath = 'base/spec/javascript/fixtures/';
    loadFixtures('hidden_params_fixture.html');
  });

  it("creates class", function(){
    expect(gameClient.ajaxCaller).toEqual(ajaxCaller);
    expect(gameClient.responseHandler).toEqual('responseHandler');
  });

  it("calls ajax caller with add move url", function() {
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain(urlFactory.getAddMoveURL());
    expect(ajaxCaller.urlSentTo).toContain("?");
    expect(ajaxCaller.urlSentTo).toContain("position=0");
  });

  it("adds board parameter when calling add move", function(){
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('board=some_board_param');
  });

  it("adds game type parameter when calling add move", function(){
    gameClient.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('game_type=HVH');
  });

  it("calls ajax caller with response handler", function() {
    gameClient.cellClicked(0);
    expect(ajaxCaller.responseHandlerUsed).toEqual('responseHandler');
  });

  it("calls ajax caller with play turn url", function() {
    gameClient.playTurn();
    expect(ajaxCaller.urlSentTo).toContain('/play_turn');
  });

});
