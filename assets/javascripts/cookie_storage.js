'use strict';

var CookieStorage = (function(){
  var cookieStorage = function(){
  };

  cookieStorage.prototype.setCookie = function(key, value){
    $.cookie(key, value);
  };

  cookieStorage.prototype.getCookie = function(key){
    return $.cookie(key);
  };

  return cookieStorage;
})(this);
