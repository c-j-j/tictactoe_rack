describe 'CoffeeClient.CookieStorage', ->
  it 'stores and retrieves cookie', ->
    cookieStorage = new CoffeeClient.CookieStorage()
    cookieStorage.setCookie('someCookie', 'someValue')
    expect(cookieStorage.getCookie('someCookie')).toEqual('someValue')
