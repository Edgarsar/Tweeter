/* global $ */

$(() => {
  // character counter event
  const $textarea = $("#tweet-text");

  $textarea.on("input", function() {
    const $output = $($(this)[0].form[2]);
    const len = $(this).val().length;
    // if users exceed the 140 character limit, the counter appears red
    if (len > 140) {
      $output.css("color", "#ff0000");
    } else {
      $output.css("color", "#545149");
    }
    $output.html(140 - len);

  });

});
