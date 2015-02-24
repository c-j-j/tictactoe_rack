'use strict';

describe('URLFactory Tests', function(){
  var stubStorage;
  var urlFactory;

  beforeEach(function(){
    stubStorage = new StubStorage();
    urlFactory = new URLFactory(stubStorage);
  });

  it("creates class", function(){
    expect(urlFactory).not.toBeNull();
  });

  it("add move url includes remote ip from storage", function(){
    stubStorage.setRemoteIP("someRemoteIP");
    expect(urlFactory.getAddMoveURL()).toContain("someRemoteIP");
    expect(urlFactory.getAddMoveURL()).toContain("/add_move");
  });

  it("add move url does not include ip when remote ip not set in storage", function(){
    expect(urlFactory.getAddMoveURL()).toEqual("/add_move");
  });
});
