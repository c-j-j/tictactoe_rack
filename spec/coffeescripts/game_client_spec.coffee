describe 'game client', ->
  gameClient = {}
  ajaxCaller = {}

  beforeEach ->
    ajaxCaller = new CoffeeClient.StubAjaxCaller()
    gameClient = new CoffeeClient.GameClient(ajaxCaller, 'response_handler')
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/'
    loadFixtures('hidden_params_fixture.html')

  it 'creates class', ->
    expect(gameClient.ajaxCaller).toEqual(ajaxCaller)
    expect(gameClient.responseHandler).toEqual('response_handler')

  it 'calls ajax sender with add move url', ->
    expect(gameClient.cellClicked(0))
    expect(ajaxCaller.urlSent).toContain(CoffeeClient.CONFIG.add_move_path)
    expect(ajaxCaller.urlSent).toContain("position=0")
    expect(ajaxCaller.urlSent).toContain('board=some_board_param')
    expect(ajaxCaller.urlSent).toContain('game_type=HVH')

  it 'calls ajax sender with response handler', ->
    expect(gameClient.cellClicked(0))
    expect(ajaxCaller.responseHandlerUsed).toEqual('response_handler')


