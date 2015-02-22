'use strict';

describe('Ajax Sender Tests', function(){

  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it("creates class", function(){
    var ajaxSender = new AjaxSender();
 //jasmine.Ajax.requests.mostRecent().response({
      //"status": 200,
      //"responseText": "some response"
    //});
    expect(ajaxSender).not.toBeNull();
  });

  it("invokes response handler with response", function(){
    jasmine.Ajax.stubRequest('/some_url').andReturn({
      "responseText": 'some response'
    });

    var responseHandler = jasmine.createSpy("responseHandler");
    new AjaxSender().send('/some_url', responseHandler);
    expect(responseHandler).toHaveBeenCalledWith('some response');
  });
});
