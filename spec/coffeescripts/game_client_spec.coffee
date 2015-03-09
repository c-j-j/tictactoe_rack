describe 'CoffeeClient.GameClient', ->
  gameClient = null
  ajaxCaller = null
  temporaryStorage = null

  beforeEach ->
    temporaryStorage = new CoffeeClient.TemporaryStorage()
    cookieStorage = new CoffeeClient.CookieStorage()
    cookieStorage.setCookie(CoffeeClient.CONFIG.gameTypeParam, "HVC")
    ajaxCaller = new CoffeeClient.StubAjaxCaller()
    gameClient = new CoffeeClient.GameClient(ajaxCaller, 'response_handler', temporaryStorage, cookieStorage)

  it 'creates class', ->
    expect(gameClient.ajaxCaller).toEqual(ajaxCaller)
    expect(gameClient.responseHandler).toEqual('response_handler')

  it 'calls ajax sender with url that includes game type stored in cookie', ->
    expect(gameClient.cellClicked(0))
    expect(ajaxCaller.urlSentTo).toContain(CoffeeClient.CONFIG.addMovePath)
    expect(ajaxCaller.urlSentTo).toContain('game_type=HVC')

  it 'calls ajax sender with response handler', ->
    expect(gameClient.cellClicked(0))
    expect(ajaxCaller.responseHandlerUsed).toEqual('response_handler')

  it "adds board parameter when calling add move", ->
    temporaryStorage.setItem(CoffeeClient.CONFIG.boardParam, "stored_board_param")
    gameClient.cellClicked(0)
    expect(ajaxCaller.urlSentTo).toContain('board=stored_board_param')
