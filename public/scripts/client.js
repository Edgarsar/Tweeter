/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {
  // Function that prevents Cross-Site Scripting
  const escape = function (str) {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  };

  const createTweetElement = function (tweet) {
    const $tweet = $(`<div class="user">
    <article class="tweets">
     
      <header>
        <div class="user-name">
        <img src="${tweet.user.avatars}">
        <span>${tweet.user.name}</span>
      </div>
        <span class="userName">${tweet.user.handle}</span>
      </header>
      <div class="message">
        <p>${escape(tweet.content.text)}</p>
      </div>
      <footer>
        <span>${timeago.format(tweet.created_at)}</span>
        <div>
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class='fas fa-sync'></i>
        <i class="fa-solid fa-heart"></i>
      </div>
  
      </footer>
    
    </article>
  </div> `);



    return $tweet;
  };

  const renderTweets = function (tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend($tweet);
    }
  };

  const loadtweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (users) => {
        //clear the existing tweets
        $('#tweets-container').empty();
        renderTweets(users);
      },
      error: (err) => {
        console.log(`error: ${err}`);
      }
    });
  };

  loadtweets(); 

  const $submit = $("#submit-tweet");

  $submit.submit(function (event) {
    event.preventDefault();
    const userInput = $(event.target).serializeArray()[0].value;
    // checks textarea is empty or not
    if (!userInput) {
      // display appropriate error message
      if ($(".error-message").first().is(":hidden")) {
        $(".error-message").slideDown("slow");
      } else {
        $(".error-message").hide();
      }
      // checks maximum message length then display appropriate error message
    } else if (userInput.length > 140) {
      // if it's over 140 characters then display appropriate error message
      if ($(".error-message").first().is(":hidden")) {
        $(".error-type").html("Maximum message length exceeded")
        $(".error-message").slideDown("slow");
      } else {
        $(".error-message").hide();
        // then clear textarea
        $submit[0].reset();
        // get back the characters length and color
        $(".counter").html(140).css("color", "#545149");

      }
    } else {
      const serializedData = $(event.target).serialize();
      $.post('/tweets/', serializedData, data => {
        loadtweets();
        // after submit clear textarea
        $submit[0].reset();
        // display output back to 140
        $(".counter").html(140);



      });
    }
  });
  // event that slides up the page and enable the textarea automatically
  $('#slide-up').click(function(e){
    $(document).scrollTop(0).click(function(){$("#tweet-text").focus()})
  });
  

});