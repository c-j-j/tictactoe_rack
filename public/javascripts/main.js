var storage = new Storage();
var gameClient = new GameClient(new AjaxSender, new JsonResponseHandler(storage).parse, storage);

var cookieStorage=  new CookieStorage();
var gameSetup = new GameSetup(cookieStorage);
