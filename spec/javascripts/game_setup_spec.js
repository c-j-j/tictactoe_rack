describe('Game Setup Tests', function(){
var storage, gameSetup;
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    loadFixtures('game_setup_fixture.html');
    storage =  new Storage();
    gameSetup = new GameSetup(storage);
  });

  it("stores game type in cookies", function(){
    gameSetup.setup();
    expect(storage.get('game_type')).toEqual('SomeGameType');
  });

  it("stores board size in cookie", function(){
    gameSetup.setup();
    expect(storage.get('board_size')).toEqual('4');
  });
});
