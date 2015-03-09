class CoffeeClient.CookieStorage
  setCookie: (key, value)->
    $.cookie(key, value)

  getCookie: (key)->
    $.cookie(key)
