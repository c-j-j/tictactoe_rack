cookieStorage = new CoffeeClient.CookieStorage()
storage = new CoffeeClient.TemporaryStorage()
this.gameClient = new CoffeeClient.GameClient(new CoffeeClient.AjaxCaller(), new CoffeeClient.JsonResponseHandler(storage).parse, storage, cookieStorage)
