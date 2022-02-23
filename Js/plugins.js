/*global $, jQuery, alert*/

// Determine Carousel Height //
$(function (){
    'use strict';
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight();

    $('.carousel, .carousel-item').height(winH - navH);
   

// Increase Numbers On Scrolling //

      let nums = document.querySelectorAll(".stats .number");
      let statsSection = document.querySelector(".stats");
      let started = false; // Function Started ? No
    
window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop - 600) {
    if (!started) {
      $(".number").countTo({
      })
        started = true;
  }}};

$(function()
{ "use strict";
  var $text1 = $('.number1');
  var options_1 = {
    start_value: 0
    ,end_value: 800000
    ,duration: 2000
    ,after: function($element, _value)
  {}};
  
  var $text2 = $('.number2');
  var options_2 = {
    start_value: 0
    ,end_value: 565
    ,duration: 2000
    ,after: function($element, _value)
  {}};
  var $text3 = $('.number3');
  var options_3 = {
    start_value: 0
    ,end_value: 965000
    ,duration: 2000
    ,after: function($element, _value)
  {}};
  var $text4 = $('.number4');
  var options_4 = {
    start_value: 0
    ,end_value: 815000
    ,duration: 2000
    ,after: function($element, _value)
  {}};
  window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop - 600) {
      if (!started) {
  $text1.easy_number_animate(options_1);
  $text2.easy_number_animate(options_2);
  $text3.easy_number_animate(options_3);
  $text4.easy_number_animate(options_4);

    started = true;
}}};
});

//highlight current day on working hours //

weekday();

function weekday() {

  var d = new Date();

  if (d.getDay() == 0)     {
                      document.getElementById("Sunday").classList.add('today');
                      }

  if (d.getDay() == 1)     {
                      document.getElementById("Monday").classList.add('today');
                      }

  if (d.getDay() == 2)     {
                      document.getElementById("Tuesday").classList.add('today');
                      }

  if (d.getDay() == 3)     {
                      document.getElementById("Wednesday").classList.add('today');
                      }

  if (d.getDay() == 4)     {
                      document.getElementById("Thursday").classList.add('today');
                      }

  if (d.getDay() == 5)     {
                      document.getElementById("Friday").classList.add('today');
                      }

  if (d.getDay() == 6)     {
                      document.getElementById("Saturday").classList.add('today');
                      }                   
                  }

  // var todaysDate = new Date();
  // var currentDay = todaysDate.getDay();

  // $('.working-hours li').eq(currentDay);
  //   $(this).css("color","white");

// var weekDay = ('.working-hours li');
// var d = new Date();
// let currentDay = d.getDay();

// $('weekDay').eq(':eq(weekDay)');
// $('weekDay').eq(currentDay);
// $('weekDay').addClass('today');
// console.log(weekDay);

// $(document).ready(function () {
// //     "use strict";
//   var todaysDate = new Date();
//   var currentDay = todaysDate.getDay();

    // $('.working-hours, li').eq(currentDay()).addClass('today');
    // }); 
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];
// document.getElementsByClassName(".working-hours li").innerHTML = day;

  // $(".working-hours li").eq(newDate());
  // $(".working-hours li").css("color","white");



  // Scroll To Top button //
var scrollButton = $("#scroll-top");
$(window).scroll(function ()
{   "use strict";
 $(this).scrollTop() >= 1900 ? scrollButton.show() : scrollButton.hide();
});
 scrollButton.click(function ()
  {     "use strict";

    $('html,body').animate({ scrollTop:  0 }, 300);
});

// Reach the characters limit //

  $('#characterLeft').text('140 characters left');
  $('#message').keydown(function () {
      var max = 140;
      var len = $(this).val().length;
      if (len >= max) {
          $('#characterLeft').text('You have reached the limit');
          $('#characterLeft').addClass('red');
          $('#btnSubmit').addClass('disabled');            
      } 
      else {
          var ch = max - len;
          $('#characterLeft').text(ch + ' characters left');
          $('#btnSubmit').removeClass('disabled');
          $('#characterLeft').removeClass('red');            
      }
});
});
