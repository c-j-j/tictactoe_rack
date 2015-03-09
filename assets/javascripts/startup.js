'use strict';

var Startup = (function(){
  var homepageRedirect, storage;
  var startup = function(_homepageRedirect, _storage){
    homepageRedirect = _homepageRedirect;
    storage = _storage;
  };

  startup.prototype.start = function(){
    if (sessionStorage.getItem(BOARD) !== null) {
      homepageRedirect();
      storage.remove(BOARD);
    }
  };

  return startup;
})(this);
