// $(document).ready(function() {


// console.log("What's goodie 2 shoez");
var playerBankRoll = 10000;

//makes a deck of 52 cards
var makeDeck = function(){
  var suits = ["C", "D", "S", "H"];
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var totalCards = suits.length * values.length;
  // console.log(suits.length);
  // console.log(values.length);
  // console.log(totalCards);
  var deck = [];
  for (i = 0; i < suits.length; i++){
    for(j = 0; j < values.length; j++){
      deck.push([values[j],suits[i]]);
    }
  }
  // console.log(deck);
  shuffleDeck(deck);
};

//shuffles array, using fisher-yates shuffle.
var shuffleDeck = function(newDeck) {
  var j = 0;
  var temp = null;

  for (var i = newDeck.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    // console.log(j);
    temp = newDeck[i]
    newDeck[i] = newDeck[j]
    newDeck[j] = temp
  }
  bet(newDeck);
  //gameplay
  
  // console.log(newDeck);
  // return deck;
};

//asks player how much they would like to bet
var bet = function(shuffledDeck){
  // var betAmount = prompt("How much would you like to bet?"); //needs to take in a number input
  do{
  var betAmount = parseInt(window.prompt("Place your bet"));
  }while(isNaN(betAmount) || playerBankRoll < betAmount || betAmount < 1);

  // console.log(betAmount);
  playerBankRoll = playerBankRoll - betAmount;
  // console.log(playerBankRoll);
  dealCards(betAmount, shuffledDeck);
}

//assigns cards to players
var dealCards = function(betAmount, shuffledDeck){
  // console.log(betAmount);
  // makeDeck();
  var dealer = [];
  var player = [];
  console.log(shuffledDeck);  
  for (i = 0; i < 4; i += 2){
    dealer.push(shuffledDeck[i])
    player.push(shuffledDeck[i + 1]);
    // console.log(i);
  }
  console.log(dealer);
  console.log(dealer[0][0]); //confirms the card number returns string
  console.log(dealer[1][0]);

  console.log(player);
  console.log(player[0][0]); //confirms the card number
  console.log(player[1][0]);
  convertToNumbers(dealer, player);
  // sumTheCards(dealer, player);
}

//converts the cards without numerical value to a number
var convertToNumbers = function(dealerCards, playerCards){
  console.log("convertToNumbers works");
  console.log(dealerCards);
  // console.log(dealerCards.length);
  // for (i = 0; i < dealerCards.length; i++){
  //   if (dealerCards[i][0] === "J" || "Q" || "K"){
  //     dealerCards[i][0] = 10;
  //     console.log(i);
  //   } else if (dealerCards[i][0] === "A") {
  //     checkAce(dealerCards[i][0]);
  //   }
  // }
  console.log(dealerCards)
}

var checkAce = function(aceCard) {
  console.log("checkAce works");
  console.log(aceCard);

}

var sumTheCards = function(dealerCards, playerCards) {
  console.log("sum the cards works");
  J = 10
  Q = 10
  K = 10
  A = 11
  dealerSum = parseInt(dealerCards[0][0]) + parseInt(dealerCards[1][0]);
  console.log(dealerSum);
  
}


// });//end