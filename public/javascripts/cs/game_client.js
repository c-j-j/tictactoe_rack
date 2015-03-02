(function() {
  CoffeeClient.GameClient = (function() {
    var extractHTMLFromDOM, toQueryParameterString;

    function GameClient(_at_ajaxCaller, _at_responseHandler) {
      this.ajaxCaller = _at_ajaxCaller;
      this.responseHandler = _at_responseHandler;
    }

    GameClient.prototype.cellClicked = function(cell) {
      var queryParameters, url;
      queryParameters = {
        position: cell,
        board: extractHTMLFromDOM("board_param"),
        game_type: extractHTMLFromDOM("game_type_param")
      };
      url = CoffeeClient.CONFIG.add_move_path + toQueryParameterString(queryParameters);
      return this.ajaxCaller.send(url, this.responseHandler);
    };

    toQueryParameterString = function(queryParameterObj) {
      var key, queryParameterArray, value;
      queryParameterArray = [];
      for (key in queryParameterObj) {
        value = queryParameterObj[key];
        queryParameterArray.push((encodeURIComponent(key)) + "=" + (encodeURIComponent(value)));
      }
      return "?" + (queryParameterArray.join("&"));
    };

    extractHTMLFromDOM = function(id) {
      return document.getElementById(id).innerHTML;
    };

    return GameClient;

  })();

}).call(this);
