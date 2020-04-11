/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let message = '';

const getQuoteBox = document.getElementById('quote-box');
/*** 
 * `quotes` array 
***/
let quotes = [
	{quote: 'All that we are is the result of what we have thought.', source: 'Buddha'},
	{quote: 'The most courageous act is still to think for yourself. Aloud.', source: 'Coco Chanel'},
	{quote: 'Don’t count the days, make the days count.', source: 'Muhammad Ali'},
	{quote: 'God helps those that help themselves.', source: 'Benjamin Franklin'},
	{quote: 'I\'ve failed over and over again in my life and that is why I succeed.', source: 'Michael Jordan', citation: 'BrainyQuote.com', year: '2020'}
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	const upper = quotes.length;
	let randomIndex = Math.floor( Math.random() * upper );
	let getRandomQuote = quotes[randomIndex];
	return getRandomQuote;	
}


/***
 * `printQuote` function
***/
function printQuote() {
	const quoteInstance = getRandomQuote();
	message = '<p class="quote">' + quoteInstance.quote + '</p>';
	message += '<p class="source">' + quoteInstance.source;
		
	if(quoteInstance.citation){
		message += '<span class="citation">' + quoteInstance.citation + '</span>';
	}
	if(quoteInstance.year){
		message += '<span class="year">' + quoteInstance.year + '</span>';
	}
	message += '</p>'
	
	getQuoteBox.innerHTML = message;
}


getRandomQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);











