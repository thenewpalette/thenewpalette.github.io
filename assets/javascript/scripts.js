// for some reason the used strict is not working?
$(function(){
   'use strict';

//tabs
$('#about-me').on('click', function (event){
  event.preventDefault();
  window.location = "aboutme.html";
});

$('#home').on('click', function (event){
  event.preventDefault();
  window.location = "index.html";
});

$('#food').on('click', function (event){
  event.preventDefault();
  window.location = "food.html";
});

$('#design').on('click', function (event){
  event.preventDefault();
  window.location = "food.html";
});

//about me footer
$('.about-me-footer').on('click', function (event){
  event.preventDefault();
  window.location = "aboutme.html";
});

});
