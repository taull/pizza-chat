(function(){
  'use strict';

var pizzaUrl ="http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
console.log("hello");

$(document).ready(function() {

  $.ajax(pizzaUrl).done(function(data) {
    console.log(data);
  });


  });
})();
