var storage = new Storage();
var gameClient = new GameClient(new AjaxSender, new JsonResponseHandler(storage).parse, storage);
var gameSetup = new GameSetup(storage);
