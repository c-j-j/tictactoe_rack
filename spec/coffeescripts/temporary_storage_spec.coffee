describe 'Storage.coffee tests', ()->
 it "sets and gets value", ()->
    storage = new CoffeeClient.TemporaryStorage()
    storage.setItem("someKeyName", "someValue")
    expect(storage.getItem("someKeyName")).toEqual("someValue")
