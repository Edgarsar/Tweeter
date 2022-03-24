/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

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
        <p>${tweet.content.text}</p>
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
  }

  const loadtweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (users) => {
        renderTweets(users);
      },
      error: (err) => {
        console.log(`error: ${err}`)
      }
    });
  };

  loadtweets();
  const $submit = $("#submit-tweet");

  $submit.submit(function (event) {
    event.preventDefault();
    console.log('The form was submitted!')
    const serializedData = $(event.target).serialize();

    $.post('/tweets/', serializedData, data => {
      console.log(data)
      loadtweets();

    })
  })

  


  // renderTweets(data)
});