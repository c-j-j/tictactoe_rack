describe 'ajax caller', ->

  beforeEach ->
    jasmine.Ajax.install()

  afterEach ->
    jasmine.Ajax.uninstall()

  it 'calls response handler with ajax response', ->
    ajaxCaller =  new CoffeeClient.AjaxCaller()
    jasmine.Ajax.stubRequest('/some_url').andReturn({
      "responseText": 'some response'
    })

    responseHandler = jasmine.createSpy("responseHandler")
    ajaxCaller.send('/some_url', responseHandler)
    expect(responseHandler).toHaveBeenCalledWith('some response')
