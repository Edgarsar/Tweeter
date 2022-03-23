/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Edgar",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@Sargsyan"
    },
    "content": {
      "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    "created_at": 1461223432227
  }
];



$(()=>{

  const createTweetElement = function(tweet) {
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
        <span>${tweet.created_at}</span>
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

  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweet);
    }


  }

  renderTweets(data);
});