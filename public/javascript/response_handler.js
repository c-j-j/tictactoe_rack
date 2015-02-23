'use strict';

var JsonResponseHandler = function(json){
  var response = JSON.parse(json);
  console.log(document.getElementById("gameStatus"));
  document.getElementById("gameStatus").innerHTML = response.status
}

