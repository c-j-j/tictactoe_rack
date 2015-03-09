var GameSetup = (function(){
  var gameSetup = function(storage){
    this.storage = storage;
  };

  gameSetup.prototype.setup = function(){
    this.storage.set('game_type', getValue("GameType"));
    this.storage.set('board_size', getValue("BoardSize"));
    this.storage.remove(BOARD);
  };

  function getValue(id){
    return document.getElementById(id).value;
  }

  return gameSetup;
})(this);
