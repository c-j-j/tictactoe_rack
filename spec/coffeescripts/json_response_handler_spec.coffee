describe 'coffee based json response handler', ->

  responseHandler = null
  storage = null

  beforeEach ->
    storage = new CoffeeClient.TemporaryStorage()
    responseHandler = new CoffeeClient.JsonResponseHandler(storage)
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/'
    loadFixtures('play_turn_fixture.html')

  it 'sets status in html', ->
    responseHandler.parse(stub_response())
    expect(document.getElementById("status").innerHTML).toEqual('some status')

  it 'updates board cells in html', ->
    responseHandler.parse(stub_response())
    expect(document.getElementById("cell0").innerHTML).toEqual('O')
    expect(document.getElementById("cell1").innerHTML).toEqual('X')

  it 'updates board parameter element', ->
    responseHandler.parse(stub_response())
    expect(storage.getItem(CoffeeClient.CONFIG.board_param)).toEqual('next board param')

  it 'updates computer going next', ->
    responseHandler.parse(stub_response())
    expect(storage.getItem("computer_going_next")).toEqual(true)

  stub_response  = ()->
    play_turn_response = {
      "status": "some status",
      "board": [ "O", "X" ],
      "board_param": "next board param",
      "computer_going_next": true}
    JSON.stringify(play_turn_response)


