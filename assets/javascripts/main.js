var storage = new Storage();
var gameClient = new GameClient(new AjaxSender, new JsonResponseHandler(storage).parse, storage);
var gameSetup = new GameSetup(storage);

var homepageRedirect = function() {
  window.location.replace("/");
};

new Startup(homepageRedirect, storage).start();
