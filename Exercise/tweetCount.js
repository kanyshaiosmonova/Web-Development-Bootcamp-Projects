// This is an example for Javascript variables, concatenation and little bit of math 
var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.length;
alert(`You have written ${tweetCount} characters, you have ${140 - tweet.length} characters, remaining`);