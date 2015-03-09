describe 'CoffeeClient.GameClient', ->
  gameClient = null
  ajaxCaller = null
  temporaryStorage = null

  beforeEach ->
    temporaryStorage = new CoffeeClient.TemporaryStorage()
    cookieStorage = new CoffeeClient.CookieStorage()
    cookieStorage.setCookie(CoffeeClient.CONFIG.gameType, "HVC")

    ajaxCaller = new CoffeeClient.StubAjaxCaller()
    gameClient = new CoffeeClient.GameClient(ajaxCaller, 'response_handler', temporaryStorage, cookieStorage)

  it 'creates class', ->
    expect(gameClient.ajaxCaller).toEqual(ajaxCaller)
    expect(gameClient.responseHandler).toEqual('response_handler')

  it 'calls ajax sender with url that includes game type stored in cookie', ->
    expect(gameClient.cellClicked(0))
    expect(ajaxCaller.urlSentTo).toContain(CoffeeClient.CONFIG.add_move_path)
    expect(ajaxCaller.urlSentTo).toContain('game_type=HVC')

  xit 'calls ajax sender with response handler', ->
    expect(gameClient.cellClicked(0))
    expect(ajaxCaller.responseHandlerUsed).toEqual('response_handler')

  xit "adds board parameter when calling add move", ->
    temporaryStorage.setItem(CoffeeClient.CONFIG.board_param, "stored_board_param")
    gameClient.cellClicked(0)
    expect(ajaxCaller.urlSentTo).toContain('board=stored_board_param')
