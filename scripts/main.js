(function(){
  'use strict';

var pizzaUrl ="http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";

$(document).ready(function() {

  $.ajax(pizzaUrl).done(function(userData) {
    console.log(userData);
  });


  });
})();
