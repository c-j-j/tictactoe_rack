var GameSetup = (function(){
  var gameSetup = function(storage){
    this.storage = storage;
  };

  gameSetup.prototype.setup = function(){
    this.storage.set(GAME_TYPE, getValue("GameType"));
    this.storage.set(BOARD_SIZE, getValue("BoardSize"));
    this.storage.remove(BOARD);
  };

  function getValue(id){
    return document.getElementById(id).value;
  }

  return gameSetup;
})(this);
