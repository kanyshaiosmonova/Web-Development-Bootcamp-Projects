// We should cut characters above 140.
var tweet = prompt("Compose your tweet: ");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

// Short version
alert(prompt("Compose your tweet: ").slice(0,140));