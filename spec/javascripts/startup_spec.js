describe('Startup Tests', function(){

  var storage, homepageRedirect, startup;
  beforeEach(function(){
    storage = new Storage();
    homepageRedirect = jasmine.createSpy("homepageRedirect");
    startup = new Startup(homepageRedirect, storage);
  });


  it("does not redirect when board not stored", function(){
    storage.remove(BOARD);
    startup.start();
    expect(homepageRedirect).not.toHaveBeenCalled();
  });

  it("redirects when board set", function(){
    storage.set(BOARD, "someValue");
    startup.start();
    expect(homepageRedirect).toHaveBeenCalled();
  });

  it("clears board from storage if it is set", function(){
    storage.set(BOARD, "someValue");
    startup.start();
    expect(storage.get(BOARD)).toBeNull();
  });
});
