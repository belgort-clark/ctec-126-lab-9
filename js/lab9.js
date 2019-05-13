// lab9.js

var deck = [];

$(document).ready(function () {
	// Get a handle to the shufflebutton
	var shuffleButton = // your code goes here
	// Get a hanlde to the remove a card button
	var removeButton = // your code goes here
	// Get a handle to the new deck button
	var newdeckButton = // your code goes here

	// Call the buildDeck function
	// Your code goes here

	// Call the shuffle function and pass in the deck array
	// Your code goes here
	
	// Call the displayDeck function
	// Your code goes here

	newdeckButton.on('click', function () {
		// Empty the container div
		// Your code goes here

		// Empty the deck array
		// Your code goes here
		
		// Call the buildDeck function
		// Your code goes here

		// Call the shuffle function and pass in the deck array
		// Your code goes here
		
		// Call the displayDeck function
		// Your code goes here

	});

	shuffleButton.on('click', function () {
		// Empty the container div
		// Your code goes here		

		// Call the shuffle function and pass in the deck array
		// Your code goes here
		
		// Call the displayDeck function
		// Your code goes here

	});

	removeButton.on('click', function () {
		// Empty the container div
		// Your code goes here		

		// Remove first item from the deck
		// Your code goes here

		if (deck.length != 0) {
			// Call the displayDeck function
			// Your code goes here
		} else {
			// Comment the two lines of code below and describe in detial what they do
			$('#container').html('<p id="nomore">No cards left in the deck</p>');
			$('#nomore').css('fontSize', '5em');
		}
	});

});

function displayDeck() {
	// Empty the container div
	// Your code goes here	
	
	var element;

	for (var i = 0; i < deck.length; i++) {
		if (deck[i].state == 0) {
			element = '<div class="card"><img id="' + deck[i].text + '" src="' + "img/back.png" + '" width="100"></div>';
		} else {
			element = '<div class="card"><img id="' + deck[i].text + '" src="' + "img/" + deck[i].text + '.png' + '" width="100"></div>';
		}
		// Take the element created above and append it to the container
		// Your code goes here
	}

	$('.card img').on('click', function () {
		// store the clicked card $(this) as a variable
		// the reason for this is that $(this) isn't available in the forEach loop
		var cardClicked = $(this);
		// get the id attribute of the clicked card
		var id = cardClicked.attr('id');

		// note my use of forEach
		// here is more info on it 
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
		// loop through the card deck
		deck.forEach(function (card) {
			// is the card being looped through have the id of the card clicked
			if (card.text == id) {
				// if it is then check current card state
				if (card.state == 1) {
					// reset state to 0
					card.state = 0;
					// change the card image to the back
					cardClicked.attr('src', 'img/back.png');
				} else {
					// if the state was 0 set it to 1
					card.state = 1;
					// change the card image to the face for that id
					cardClicked.attr('src', 'img/' + id + '.png');
				}
			}
		});
	});
}

// Do not modify this function
function buildDeck() {
	var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
	var value = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < value.length; j++) {
			deck.push(new playingCard(suits[i], value[j]));
		}
	}
}

// Do not modify this function
function playingCard(suit, value) {
	this.suit = suit;
	this.value = value;
	this.text = value + '_of_' + suit;
	this.state = 0; // show back of card
}

// Do not modify this function
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}