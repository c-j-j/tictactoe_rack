var Storage = (function() {

  var dataMap;

  var storage = function() {
    dataMap = {};
  };

  storage.prototype.setItem = function(key, value) {
    dataMap[key] = value;
  };

  storage.prototype.getItem = function(key) {
    return dataMap[key];
  };

  return storage;

})(this);
