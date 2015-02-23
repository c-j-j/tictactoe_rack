'use strict';

describe('Cell Interface Tests', function(){
  var ajaxCaller;
  var cellInterface;

  beforeEach(function(){
    ajaxCaller = new AjaxSenderSpy();
    cellInterface = new CellInterface(ajaxCaller, 'responseHandler');
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    loadFixtures('hidden_params_fixture.html');
  });

  it("creates class", function(){
    expect(cellInterface.ajaxCaller).toEqual(ajaxCaller);
    expect(cellInterface.responseHandler).toEqual('responseHandler');
  });

  it("calls ajax caller with add move url", function() {
    cellInterface.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain(CONFIG.addMoveUrl);
    expect(ajaxCaller.urlSentTo).toContain("?");
    expect(ajaxCaller.urlSentTo).toContain("position=0");
  });

  it("adds board parameter when calling add move", function(){
    cellInterface.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('board=some_board_param');
  });

  it("adds game type parameter when calling add move", function(){
    cellInterface.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toContain('game_type=HVH');
  });

  it("calls ajax caller with response handler", function() {
    cellInterface.cellClicked(0);
    expect(ajaxCaller.responseHandlerUsed).toEqual('responseHandler');
  });

});
