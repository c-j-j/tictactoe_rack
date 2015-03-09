var GameSetup = (function(){
  var gameSetup = function(cookieStorage){
    this.cookieStorage = cookieStorage;
  };

  gameSetup.prototype.setup = function(){
    this.cookieStorage.setCookie('game_type', getValue("GameType"));
    this.cookieStorage.setCookie('board_size', getValue("BoardSize"));
  };

  function getValue(id){
    return document.getElementById(id).value;
  }

  return gameSetup;
})(this);
