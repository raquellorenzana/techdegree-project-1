/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



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

const page = document.getElementById

//function to getRandomQuote from quotes array
function getRandomQuote() {
	const upper = quotes.length;
	const randomIndex = Math.floor( Math.random() * upper );
	//use random number as an index to get the random quote form the array
	const getRandomQuote = quotes[randomIndex];
	return getRandomQuote;	
}

//array of colors
const pageColors = [
	"#f70f26", 
	"#4287f5", 
	"#f5fa64",
	"#faae3c", 
	"#e1bef7",
	"#f7a6f1"
]

//function to get a random color
function getRandomColor(){
	const upper = pageColors.length;
	const randomColorIndex = Math.floor(Math.random() * upper);
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
	
	//if statements checking if objects in array have citation and/or year	
	if(quoteInstance.citation){
		message += '<span class="citation">' + quoteInstance.citation + '</span>';
	}
	if(quoteInstance.year){
		message += '<span class="year">' + quoteInstance.year + '</span>';
	}
	if(quoteInstance.tag){
		message += '<span class="tag">, ' + quoteInstance.tag + '</span>';
	}
	message += '</p>'
	
	getQuoteBox.innerHTML = message;
	
}


function changeColor(){
	document.body.style.backgroundColor = getRandomColor();
}
//call getRandomQuote function
getRandomQuote();
intervalQuotes();

//when button is clicked, the printquote function is called
getLoadQuote.addEventListener("click", printQuote, false);

getLoadQuote.addEventListener("click", changeColor, false);











