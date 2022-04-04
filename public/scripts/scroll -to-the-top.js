/* global $ */

$(()=>{

// makes the form slide up when the 'new' button in the navigation is clicked
$('#slide-up').click(function() {
  //enable the text area
  $("#tweet-text").focus();
  //scroll the page to the top
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});


// makes the page scroll to the top and enable the textarea when the scroll top button is clicked
$(window).scroll(function() {
  // the bottom button disappears when the user scrolls back to the top
  if ($(this).scrollTop() <= 100) {
    $('#scroll-top').fadeOut();
  } else {
    // the bottom button appears when the user starts to scroll
    $("#scroll-top").css("display", "inline");
  }
});

// when scroll to the top button is clicked
$('#scroll-top').click(function() {
  // enable the text area
  $("#tweet-text").focus();
  // scroll the page to the top
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});

});