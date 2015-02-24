'use strict';

var ADD_MOVE_PATH = '/add_move';

var URLFactory = function(storage){
  this.storage = storage;
}

URLFactory.prototype.getAddMoveURL = function(){
  var ipAddress = "";
  var remoteIP = this.storage.getRemoteIP();

  if (remoteIP != undefined){
    ipAddress = remoteIP;
  }

  return ipAddress + ADD_MOVE_PATH;
}
