(function(){
  'use strict';

var pizzaUrl ="http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
console.log("hello");

$(document).ready(function() {

  var $userInfoOutput = $('.msg-list');

  var renderChatTemplate = _.template($('.chat-items').text());

  $.ajax(pizzaUrl).done(function(data) {
    _.each(data, function(info) {
      // _.defaults(info, {
      //   username: "",
      //   createdAt: (new Date()).toString(),
      //   message: ""
      // });
      if(info.username && info.createdAt && info.message) {
        $userInfoOutput.append(renderChatTemplate(info));
      }
    console.log(info);
    });
  });

  $.ajax({
    url: "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats",
    type: "POST",
    data: {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      username: "Dad",
      createdAt: (new Date()).toString()
    }
  });



  $('#loginButton').on('click', function(){
    $('.msg-container').removeClass('hidden');
    $('.login-container').addClass('hidden');
    // $(this).addClass('current');
  });




  });
})();
