'use strict';

describe('Cell Interface Tests', function(){

  it("creates class", function(){
    var cellInterface = new CellInterface('ajaxCaller', 'responseHandler');
    expect(cellInterface.ajaxCaller).toEqual('ajaxCaller');
    expect(cellInterface.responseHandler).toEqual('responseHandler');
  });

  it("calls ajax caller with cell that was clicked", function() {
    var ajaxCaller = new AjaxSenderSpy();
    var cellInterface = new CellInterface(ajaxCaller, 'responseHandler');
    cellInterface.cellClicked(0);
    expect(ajaxCaller.urlSentTo).toEqual(CONFIG.addMoveUrl);
  });

  it("calls ajax caller with response handler", function() {
    var ajaxCaller = new AjaxSenderSpy();
    var cellInterface = new CellInterface(ajaxCaller, 'responseHandler');
    cellInterface.cellClicked(0);
    expect(ajaxCaller.responseHandlerUsed).toEqual('responseHandler');
  });
});
