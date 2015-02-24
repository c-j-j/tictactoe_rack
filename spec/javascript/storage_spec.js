'use strict';

describe('Storage Tests', function(){

  it("retrives remote IP from localstorage", function(){
    localStorage.setItem("REMOTE_IP", "someRemoteIP");
    var storage = new Storage()
    expect(storage.getRemoteIP()).toEqual("someRemoteIP");
  });
});
