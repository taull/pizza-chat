(function(){
  'use strict';

var pizzaUrl ="http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
console.log("hello");

var usernameInput = "";
var messageInput = "";
var currentDateTime = "";

$(document).ready(function() {

currentDateTime = Date.now();

var $userInfoOutput = $('.msg-list');
var renderChatTemplate = _.template($('.chat-items').text());

$('#loginButton').on('click', function(){
  event.preventDefault();

    if($(".username-input").val() === '') {
      alert("Please enter an username");
    } else {
      usernameInput = $(".username-input").val();
      console.log(usernameInput);
      $('.username-filler').text(usernameInput);
      $('.msg-container').removeClass('hidden');
      $('.msg-container').scrollTop($('.msg-container')[0].scrollHeight);
      $('.msg-input-container').removeClass('hidden');
      $('.login-container').addClass('hidden');
      $('.welcome').addClass('hidden');
    }

});


$($userInfoOutput).empty();
$.ajax(pizzaUrl).done(function(data) {
  var sortedData = _.sortBy(data, function(dataItem){
    return dataItem._id;
  });
  _.each(sortedData, function(info) {
    if(info.username && info.createdAt && info.message) {
      $userInfoOutput.append(renderChatTemplate(info));
    }
  });
});


function getMsg() {
  $.ajax(pizzaUrl).done(msgFilter);
}

function msgFilter(chatData) {
  var filteredData = _.filter(chatData, function(chat){
    return chat.createdAt >= currentDateTime;
  });
  currentDateTime = Date.now();
  _.each(filteredData, function(info) {
      $userInfoOutput.append(renderChatTemplate(info));
      $('.msg-container').scrollTop($('.msg-container')[0].scrollHeight);
  });
}

setInterval(getMsg, 1000);


$('#msg-textbox').keypress(function (key) {
  if (key.which == 13) {
    $("#msgButton").click();
  }
});


$('#msgButton').on('click', function(){
  event.preventDefault();
  if($("#msg-textbox").val() === ''){
    alert("Enter a message");
  } else {
    messageInput = $("#msg-textbox").val();
    console.log(messageInput);
    $.ajax({
      url: pizzaUrl,
      type: "POST",
      data: {
        message: messageInput,
        username: usernameInput,
        createdAt: Date.now()
      }
    });
  }
  $('#msg-textbox').val('');
});

});
})();
