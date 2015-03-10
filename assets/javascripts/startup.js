'use strict';

var Startup = (function(){
  var homepageRedirect, storage;
  var startup = function(_homepageRedirect, _storage){
    homepageRedirect = _homepageRedirect;
    storage = _storage;
  };

  startup.prototype.start = function(){
    if (boardHasBeenSet()) {
      homepageRedirect();
      clearBoard();
    }
  };

  function boardHasBeenSet(){
    return sessionStorage.getItem(BOARD) !== null;
  }

  function clearBoard(){
    storage.remove(BOARD);
  }

  return startup;
})(this);
