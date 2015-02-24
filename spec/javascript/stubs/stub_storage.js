var StubStorage = function(){
}

StubStorage.prototype.setRemoteIP = function(remoteIP){
  this.remoteIP = remoteIP;
}

StubStorage.prototype.getRemoteIP = function(){
  return this.remoteIP;
}
