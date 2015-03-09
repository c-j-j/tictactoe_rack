describe('Cookie Storage Tests', function(){

  it("sets cookie to blank", function(){
    var cookie_storage = new CookieStorage();
    cookie_storage.setCookie("someKeyName", "");
    expect($.cookie("someKeyName")).toEqual('');
  });

  it("sets cookie", function(){
    var cookie_storage = new CookieStorage();
    cookie_storage.setCookie("someKeyName", "someValue");
    expect($.cookie('someKeyName')).toEqual("someValue");
  });

  it("gets cookie", function(){
    var cookie_storage = new CookieStorage();
    $.cookie('someCookie', 'someValue');
    expect(cookie_storage.getCookie("someCookie")).toEqual('someValue');
  });
});
