describe('Game Setup Tests', function(){
var cookieStorage, gameSetup;
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    loadFixtures('game_setup_fixture.html');
    cookieStorage =  new CookieStorage();
    gameSetup = new GameSetup(cookieStorage);
  });

  it("stores game type in cookies", function(){
    gameSetup.setup();
    expect(cookieStorage.getCookie('game_type')).toEqual('SomeGameType');
  });

  it("stores board size in cookie", function(){
    gameSetup.setup();
    expect(cookieStorage.getCookie('board_size')).toEqual('4');
  });
});
