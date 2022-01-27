//create cards by suit and value;
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//add numeric value to card in order to compare cards;

//create a Deck class to hold cards;
class Deck {
    constructor(cards) {
        this.cards = cards;
    }
}


//create card deck;
function getDeck()
{
	var deck = [];

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i], Rank: ranks[x]};
			deck.push(card);
		}
	}

	return deck;
}
cardDescription = function() {return `This cards suit is: ${suits}, this cards rank is: ${ranks}, this cards number value is: ${values}`};

//shuffle deck for 1000 turns, switching the value for two random cards;
function shuffle(deck)
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmpDeck = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmpDeck;
	}
}

//function to start the game onload;
function startGame()
 {
//clearing player1 and player2 points;

let p1Points = 0;
let p2Points = 0;

let p1Deck = [];
let p2Deck = [];

//function to take cardValue of each card to compare;
function compareCards(p1Card, p2Card) {

return values[p1Card.cards], values[p2Card.cards];
} 


    //create a new deck;
    newDeck = getDeck();
    //shuffle deck;
    shuffle(newDeck);
    console.log(newDeck);
    //split deck into two;
    const deckSplit = Math.ceil(newDeck.length / 2);
    p1Deck = new Deck(newDeck.slice(0, deckSplit));
    p2Deck = new Deck(newDeck.slice(deckSplit, 52));
    //log players decks;
    console.log(p1Deck);
    console.log(p2Deck);
    
  
     //function to take card from each players deck to play "War";
for(i =1; i < 27; i++) {
    console.log("Round " + i);
    p1Card = p1Deck.cards.pop();
    p2Card = p2Deck.cards.pop();
    console.log(p1Card);
    console.log(p2Card);

    //add point to winning cards player's deck;
    if(compareCards(p1Card, p2Card)) {
        console.log("Player 1 gets the point " + i );
        p1Deck.push(p1Card);
        p2Deck.push(p2Card);
        p1Points += 1;
    } else if (compareCards(p2Card, p1Card)) {
        console.log("Player 2 gets the point " + i);
        p2Points += 1;
        p1Deck.push(p1Card);
        p2Deck.push(p1Card);
    } else {
        //if cards are equal in value;
        console.log("It is a tie");
    }
    }

}
//player with the most points wins the game;
function getWinner() {
    if(p1Points > p2Points) {
        console.log("Player 1 wins!")
    } else if (p1Points < p2Points) {
        console.log("Player 2 wins!")
    } else {
        console.log("You have tied!");
    }
}
