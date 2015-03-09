describe('Storage Tests', function(){

  it("sets cookie", function(){
    var storage = new Storage();
    storage.set("someKeyName", "someValue");
    expect(storage.get("someKeyName")).toEqual('someValue');
  });

  it('removes value', function(){
    var storage = new Storage();
    storage.set("someKeyName", "someValue");
    storage.remove("someKeyName");
    expect(storage.get("someKeyName")).toEqual(null);
  });
});
