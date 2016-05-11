// $(document).ready(function() {


// console.log("What's goodie 2 shoez");
var playerBankRoll = 10000;
var shuffledDeckUse = []
var hitIncrement = 4;
var dealerCardCount = 2;
var playerCardCount = 2;
var dealerAceCounter = 0;
var playerAceCounter = 0;

$("#start").click(function(){
  start();
})

//starts the game
var start = function(){
  // console.log("start works");
  makeDeck();
}

var

//makes the play again button
var makePlayAgainButton = function() {
  var $newdiv1 = $("<button id='play-again'/>").text("Play Again?");
  $newdiv1.click(function(){
    console.log("playAgain works");
    playAgain();
  })
  $("#container").append($newdiv1);
};

//runs play again
var playAgain = function() {
  hitIncrement = 4;
  dealerCardCount = 2;
  playerCardCount = 2;
  dealerAceCounter = 0;
  playerAceCounter = 0;

  // makeDeck();
};

//restarts the game
var restart = function() {
  hitIncrement = 4;
  dealerCardCount = 2;
  playerCardCount = 2;
  dealerAceCounter = 0;
  playerAceCounter = 0;
  makeDeck();
}
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
  shuffledDeckUse = newDeck;
  bet(shuffledDeckUse);
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
}

//converts the cards without numerical value to a number
var convertToNumbers = function(dealerCards, playerCards){
  // console.log("convertToNumbers works");
  console.log(dealerCards);
 
  // console.log(dealerCards.length);
  for (i = 0; i < dealerCards.length; i++){
    // console.log(dealerCards[i][0]);
    if (dealerCards[i][0] === "J" || dealerCards[i][0] === "Q" || dealerCards[i][0] === "K") {
      // console.log("converting works");
      dealerCards[i][0] = 10;
    } else if (dealerCards[i][0] === "A") {
      // dealerCards[i][0] = 11;
      dealerCards[i][0] = 11; //go back to this for 1 or 11
      dealerAceCounter++;
      console.log(dealerAceCounter);
      // console.log(dealerCards[i][0]);
    }
    if (playerCards[i][0] === "J" || playerCards[i][0] === "Q" || playerCards[i][0] === "K") {
      // console.log("converting works");
      playerCards[i][0] = 10;
    } else if (playerCards[i][0] === "A") {
      // playerCards[i][0] = 11;
      playerCards[i][0] = checkAce();
      playerAceCounter++; 
      console.log(playerAceCounter);
      // console.log(playerCards[i][0]);
      // checkAce(dealerCards[i][0]); //go back to this for 1 or 11
    }
    // if (dealerCards[i][0] === "J" || "Q" || "K"){
    //   dealerCards[i][0] = 10;
    //   console.log(i);
    // } else if (dealerCards[i][0] === "A") {
    //   checkAce(dealerCards[i][0]);
    // }
  }
  // console.log(dealerCards);
  // console.log(playerCards);
  // console.log(dealerCards[0][0]);
  // console.log(dealerCards[1][0]);
  // checkAce(dealerCards);
  sumTheCards(dealerCards, playerCards);
};

var convertToNumbers1 = function(hitCard) {
    // console.log(dealerCards[i][0]);
    if (hitCard === "J" || hitCard === "Q" || hitCard === "K") {
      // console.log("converting works");
      return 10;
    } else if (hitCard === "A") {
      // dealerCards[i][0] = 11;
      playerAceCounter++;
      return checkAce(); //go back to this for 1 or 11
      // console.log(dealerCards[i][0]);
    } else {
      return parseInt(hitCard);
    }
};

var convertToNumbers2 = function(hitCard) {
    // console.log(dealerCards[i][0]);
    if (hitCard === "J" || hitCard === "Q" || hitCard === "K") {
      // console.log("converting works");
      return 10;
    } else if (hitCard === "A") {
      // dealerCards[i][0] = 11;
      dealerAceCounter++;
      return 11; //go back to this for 1 or 11
      // console.log(dealerCards[i][0]);
    } else {
      return parseInt(hitCard);
    }
};

//sees if the ace will be an 11 or 1
var checkAce = function(aceCard) {
  // console.log("checkAce works");
  // console.log(aceCard);
  do{
  var newAce = parseInt(window.prompt("1 or 11"));
  }while(isNaN(newAce) || newAce != "1" && newAce != "11");
  return newAce;
};

//sums the cards for player and dealer
var sumTheCards = function(dealerCards, playerCards) {
  console.log("sum the cards works");
  var dealerSum = 0;
  var playerSum = 0;
  console.log(dealerCards, playerCards);
  for (i = 0; i < dealerCardCount; i++) {
    dealerSum = dealerSum + parseInt(dealerCards[i][0]);
  }
  for (j = 0; j < playerCardCount; j++) {
    playerSum = playerSum + parseInt(playerCards[j][0]);
  }
  console.log("Dealer's Sum " + dealerSum);
  console.log("Player's Sum " + playerSum);
  checkForBlackJack(dealerSum, playerSum);
  hitOrStay(dealerSum, playerSum);
};

var checkForBlackJack = function(dealerBlackjack, playerBlackjack) {
  // console.log("checkForBlackJack works");
  if (dealerBlackjack === 21){
    console.log("Dealer blackjack!");
    // window.reload();
    restart();
    //next round
  } else if (playerBlackjack === 21) {
    console.log("Player blackjack!");
    restart();
    // window.reload();
    //next round
  }
};

var hitOrStay = function(dealerSum, playerSum) {
  // console.log(shuffledDeckUse);
  console.log(playerSum);
  console.log(dealerSum);
  do{
  var command = window.prompt("Hit or Stay?");
  }while(command != "hit" && command != "stay");
  if (command === "hit"){
    // console.log(playerSum);
    playerSum = playerSum + hit();
    // console.log(hit());
    console.log("This is the sum after hitting " + playerSum);
    checkForPlayerBust(dealerSum, playerSum);
    checkForBlackJack(0, playerSum);
  } else if (command === "stay"){
    if (playerSum === 21){
      dealerTurn(dealerSum, playerSum);
    }
    // console.log("stay works");
    console.log("this is the dealer sum after staying " + dealerSum);
    dealerTurn(dealerSum, playerSum);
  }
  // console.log(playerSum);
};

var hit = function(){
  var newCard = shuffledDeckUse[hitIncrement][0];
  console.log(newCard);
  hitIncrement++;
  console.log("this is the hit increment " + hitIncrement);
  return convertToNumbers1(newCard);
  // return newCard;
};

var checkForPlayerBust = function(dealerSum, playerBust) {
  if (playerBust > 21) {
    if (playerAceCounter === 0){
      console.log("Player lost");
      // window.reload();
      restart();
    } else if (playerAceCounter > 0){
      while (playerAceCounter > 0){
        playerBust -= 10;
        playerAceCounter--;
      }
    }
  } else if (playerBust < 21) {
    hitOrStay(dealerSum, playerBust);
  } else if (playerBust === 21){
    dealerTurn(dealerSum, playerBust);
  }

};

var checkForDealerBust = function(dealerSum, playerSum) {
  // if (dealerBust > 21) {
  //   console.log("Dealer lost");
  //   // window.reload();
  //   restart();
  // } 
  if (dealerSum > 21) {
    console.log("dealer sum is over 21");
    if (dealerAceCounter > 0) {
        dealerSum -= 10;
        dealerAceCounter--;
        dealerTurn(dealerSum, playerSum);
    } else {
      console.log("dealer has no aces and busted");
      restart();
      }
  } 
  // checkForBlackJack(dealerBust, playerBust); //don't think I need to check this
  checkForWinner(dealerSum, playerSum);
};

var dealerTurn = function(dealerSum, playerSum){
  console.log("dealerTurn works");
  // console.log(dealerSum);
  while (dealerSum <= 16) {
    console.log("original dealer sum " + dealerSum);
    console.log("added to sum " + convertToNumbers2(shuffledDeckUse[hitIncrement][0]));
    dealerSum = dealerSum + convertToNumbers2(shuffledDeckUse[hitIncrement][0]);
    hitIncrement++;
    console.log(hitIncrement);
    console.log("new sum" + dealerSum);
    dealerCardCount++;
  }
  checkForDealerBust(dealerSum, playerSum);
};

var checkForWinner = function(dealer, player){
  // console.log("checkForTie works");
  if (dealer === player) {
    console.log("It's a tie");
    restart();
  } else if (dealer > player) {
    console.log("dealer wins");
    restart();
  } else {
    console.log("player wins");
    restart();
  }
};


// });//end