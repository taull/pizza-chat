(function(){
  'use strict';

var pizzaUrl ="http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
console.log("hello");

var usernameInput = "";

$(document).ready(function() {

  var $userInfoOutput = $('.msg-list');

  var renderChatTemplate = _.template($('.chat-items').text());

  $('#loginButton').on('click', function(){
    event.preventDefault();
    if($(".username-input").val() === '') {
      alert("Enter an username");
    } else {
      usernameInput = $(".username-input").val();
      console.log(usernameInput);
      $('.username-filler').text(usernameInput);
      $('.msg-container').removeClass('hidden');
      $('.msg-input-container').removeClass('hidden');
      $('.login-container').addClass('hidden');
    }

  });

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
      message: "Making bacon waffles",
      username: usernameInput,
      createdAt: (new Date()).toString()
    }
  });
  console.log(data);
  });
})();
