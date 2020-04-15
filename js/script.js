/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//create variables for html message creation and accessing DOM elements 
let message = '';
const getQuoteBox = document.getElementById('quote-box');
const getLoadQuote = document.getElementById('load-quote')

//array containing 10 quotes, with a few containing citation and year
const quotes = [
	{quote: 'All that we are is the result of what we have thought.', source: 'Buddha'},
	{quote: 'The most courageous act is still to think for yourself. Aloud.', source: 'Coco Chanel', tag: 'Fashion'},
	{quote: 'Don’t count the days, make the days count.', source: 'Muhammad Ali'},
	{quote: 'God helps those that help themselves.', source: 'Benjamin Franklin'},
	{quote: 'I\'ve failed over and over again in my life and that is why I succeed.', source: 'Michael Jordan', citation: 'BrainyQuote.com', year: '2020'},
	{quote: 'I shall not waste my days in trying to prolong them.', source: 'Ian L. Fleming', year: '1908-1964'},
	{quote: 'Knowledge speaks, but wisdom listens.', source: 'Jimmy Hendrix'},
	{quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.', source: 'Steve Jobs'},
	{quote: 'Life is what happens when you\'re busy making other plans.', source: 'John Lennon'},
	{quote: 'It is during our darkest moments that we must focus to see the light.', source: 'Aristotle'}
]

//array of colors
const pageColors = ["#f70f26", "#4287f5", "#f5fa64", "#a6f74f", "#faae3c", "#e1bef7", "#f7a6f1"]

//function to select a random quote from the quotes array
function getRandomQuote() {
	//create random number
	const randomIndex = Math.floor( Math.random() * quotes.length );
	//use the randomIndex to access a random quote from the array
	const getRandomQuote = quotes[randomIndex];
	return getRandomQuote;	
}

//function to get a random color
function getRandomColor(){
	const randomColorIndex = Math.floor(Math.random() * pageColors.length);
		//use the randomColorIndex to access a random color from the array
	const randomColor = pageColors[randomColorIndex];
	return randomColor;
}

//function to reload a quote every 10 seconds
function intervalQuotes(){
	setInterval(printQuote, 10000);
}

//function to print the quote to the browser
function printQuote() {
	const quoteInstance = getRandomQuote();
	message = '<p class="quote">' + quoteInstance.quote + '</p>';
	message += '<p class="source">' + quoteInstance.source;
	/*
	create if statements checking if objects in array have citation, year or tag properties	
	and create html for each accordingly
	*/
	if(quoteInstance.citation){
		message += '<span class="citation">' + quoteInstance.citation + '</span>';
	}
	if(quoteInstance.year){
		message += '<span class="year">' + quoteInstance.year + '</span>';
	}
	if(quoteInstance.tag){
		message += '<span class="tag">' + quoteInstance.tag + '</span>';
	}
	message += '</p>'
	//set html equal to message
	getQuoteBox.innerHTML = message;

	//change the color of the page
	document.body.style.backgroundColor = getRandomColor();
}

//call functions
getRandomQuote();
intervalQuotes();

//when button is clicked, the printquote function is called
getLoadQuote.addEventListener("click", printQuote, false);












