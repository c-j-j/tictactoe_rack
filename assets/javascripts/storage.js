'use strict';

var Storage = (function(){
  var storage = function(){
  };

  storage.prototype.set = function(key, value){
    sessionStorage.setItem(key, value);
  };

  storage.prototype.remove = function(key){
    sessionStorage.removeItem(key);
  };

  storage.prototype.get = function(key){
    return sessionStorage.getItem(key);
  };


  return storage;
})(this);
