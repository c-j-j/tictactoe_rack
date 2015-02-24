'use strict';

var AjaxSender = function(){
};

AjaxSender.prototype.send = function(url, responseHandler){
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function(){
    if(this.readyState == this.DONE){
      responseHandler(xmlHttpRequest.responseText);
    }
  }

  xmlHttpRequest.open("GET", url);
  xmlHttpRequest.send();
}

var ajaxSender = new AjaxSender();
