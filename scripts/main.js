(function(){
  'use strict';

var pizzaUrl ="http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
console.log("hello");

$(document).ready(function() {

  var $userInfoOutput = $('.msg-list');

  var renderChatTemplate = _.template($('.chat-items').text());

  $.ajax(pizzaUrl).done(function(data) {
    _.each(data, function(info) {
      if(info.username && info.time && info.message) {
        $userInfoOutput.append(renderChatTemplate(info));
      }
    console.log(info);
    });
  });


  });
})();
