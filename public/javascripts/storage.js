var Storage = function(){
}

Storage.prototype.getRemoteIP = function(){
  return localStorage.getItem("REMOTE_IP");
}
