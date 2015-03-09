var cookieStorage = new CookieStorage();
var gameClient = new GameClient(new AjaxSender, new JsonResponseHandler(cookieStorage).parse, cookieStorage);

var gameSetup = new GameSetup(cookieStorage);
