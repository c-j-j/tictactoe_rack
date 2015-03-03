'use strict';

describe('Storage Tests', function(){

  it("sets and gets value", function(){
    var storage = new Storage()

    storage.setItem("someKeyName", "someValue")
    expect(storage.getItem("someKeyName")).toEqual("someValue");
  });
});
