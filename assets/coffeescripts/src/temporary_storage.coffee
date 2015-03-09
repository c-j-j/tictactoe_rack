class CoffeeClient.TemporaryStorage
  constructor: ()->
    @cache = {}

  setItem: (key, value)->
    @cache[key] = value

  getItem: (key)->
    @cache[key]
