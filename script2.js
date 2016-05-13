//clean version

$(document).ready(function() {

//initialize variables
  var playerBankRoll = 1000;
  var betAmount = 0;
  var shuffledDeckUse = [];
  var hitIncrement = 4;
  var dealerCardCount = 2;
  var playerCardCount = 2;
  var dealerAceCounter = 0;
  var playerAceCounter = 0;
  var copiedObject = [];
  var betted = 0;
  var doubleDownCounter = 0;

  $("#start").click(function(){
    start();
  })

  //starts the game
  var start = function(){
    $("#start").remove();
    makeDeck();
  }

//checks how much money there is for the player
  var checkBankRoll = function() {
    if (playerBankRoll <= 0) {
      alert("No More Money! Go Home!");
      return false;
    } else{
      return true;
    }
  }

  //makes the play again button
  var makePlayAgainButton = function() {
    $(".hit, .stay").remove();
    if (checkBankRoll() === true){
      var $playAgainButton = $("<button id='play-again'/>").text("Play Again?");
      $playAgainButton.click(function(){
        $("#play-again").remove();
        playAgain();
      })
    $("#container").append($playAgainButton);
    }
  };

  //runs play again
  var playAgain = function() {
    $(".dealt").remove();
    $("#bet-amount").html("");
    $("#payout").html("");
    $("#actions").html("");
    $("#play-again").remove();
    hitIncrement = 4;
    dealerCardCount = 2;
    playerCardCount = 2;
    dealerAceCounter = 0;
    playerAceCounter = 0;
    betAmount = 0;
    betted = 0;
    doubleDownCounter = 0;
    makeDeck();
  };

  //restarts the game
  $("#restart").click(function() {
    location.reload();
  });

  //makes a deck of 52 cards
  var makeDeck = function(){
    $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
    var suits = ["C", "D", "S", "H"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var totalCards = suits.length * values.length;
    var deck = [];
    for (i = 0; i < suits.length; i++){
      for(j = 0; j < values.length; j++){
        deck.push([values[j],suits[i]]);
      }
    }
    shuffleDeck(deck);
  };

  //shuffles array, using fisher-yates shuffle.
  var shuffleDeck = function(newDeck) {
    var j = 0;
    var temp = null;

    for (var i = newDeck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = newDeck[i]
      newDeck[i] = newDeck[j]
      newDeck[j] = temp
    }
    shuffledDeckUse = newDeck;
    bet(shuffledDeckUse);
  };

  //asks player how much they would like to bet
  //each click function when clicked generates a chip to subtract from
  var bet = function(shuffledDeck){    
    $("#one").click(function() {
      if (playerBankRoll > 0 && betAmount < 500) {
        playerBankRoll -= 1;
        betAmount += 1
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        betted++;
        /////Shout out to Kevin for the quick solution/////
        $("<div>").addClass("chips1").attr("id", "one1").appendTo($("#container")).click(function() {
          playerBankRoll += 1;
          betAmount -= 1
          $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
          $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
          betted--;
          $(this).remove();
        });
      }
    });

    $("#five").click(function() {
      if (playerBankRoll > 4 && betAmount < 496) {
        playerBankRoll -= 5;
        betAmount += 5;
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        betted++;

        $("<div>").addClass("chips1").attr("id", "five1").appendTo($("#container")).click(function() {
          playerBankRoll += 5;
          betAmount -= 5;
          $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
          $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
          betted--;
          $(this).remove();
        })
      }
    });

    $("#twenty5").click(function() {
      if (playerBankRoll > 24 && betAmount < 476) {
        playerBankRoll -= 25;
        betAmount += 25;
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        betted++;

        $("<div>").addClass("chips1").attr("id", "twenty51").appendTo($("#container")).click(function() {
          playerBankRoll += 25;
          betAmount -= 25;
          $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
          $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
          betted--;
          $(this).remove();
        })
      }
    });

    $("#fifty").click(function() {
      if (playerBankRoll > 49 && betAmount < 451) {
        playerBankRoll -= 50;
        betAmount += 50;
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        betted++;

        $("<div>").addClass("chips1").attr("id", "fifty1").appendTo($("#container")).click(function() {
          playerBankRoll += 50;
          betAmount -= 50;
          $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
          $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
          betted--;
          $(this).remove();
        })
      }
    });

    $("#one00").click(function() {
      if (playerBankRoll > 99 && betAmount < 401){
        playerBankRoll -= 100;
        betAmount += 100;
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        betted++;

        $("<div>").addClass("chips1").attr("id", "one001").appendTo($("#container")).click(function() {
          playerBankRoll += 100;
          betAmount -= 100;
          $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
          $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
          betted--;
          $(this).remove();
        })
      }
    });

    $("#five00").click(function() {
      if (playerBankRoll > 499 && betAmount < 1){
        playerBankRoll -= 500;
        betAmount += 500;
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        betted++;

        $("<div>").addClass("chips1").attr("id", "five001").appendTo($("#container")).click(function() {
          playerBankRoll += 500;
          betAmount -= 500;
          $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
          $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
          betted--;
          $(this).remove();
        })
      }
    });

      $("<button>").addClass("done").text("Done").appendTo($("#container"));
      $(".done").click(function(){
        if (betted > 0) {
          dealCards(shuffledDeck);
          $(".done").remove();
          $(".chips1").remove();
          $("#one, #five, #twenty5, #fifty, #one00, #five00").unbind();
        } else {
          alert("Need to bet");
        }
      });
  };

  //assigns cards to players
  var dealCards = function(shuffledDeck){
    var dealer = [];
    var player = []; 
    for (i = 0; i < 4; i += 2){
      player.push(shuffledDeck[i])
      $("<div>").addClass(shuffledDeck[i][1] + shuffledDeck[i][0]).addClass("dealt").appendTo($("#player"));
    }
    for (i = 1; i < 4; i += 2){
      if (i === 1){
        dealer.push(shuffledDeck[i]);
        $("<div>").addClass(shuffledDeck[i][1] + shuffledDeck[i][0]).addClass("dealt").attr("id", "hidden").appendTo($("#dealer"));
      } else {
        dealer.push(shuffledDeck[i]);
        $("<div>").addClass(shuffledDeck[i][1] + shuffledDeck[i][0]).addClass("dealt").appendTo($("#dealer"));
      }
    }
    convertToNumbers(dealer, player);
  }

  //converts the cards without numerical value to a number
  var convertToNumbers = function(dealerCards, playerCards){
    for (i = 0; i < dealerCards.length; i++){
      if (dealerCards[i][0] === "J" || dealerCards[i][0] === "Q" || dealerCards[i][0] === "K") {
        dealerCards[i][0] = 10;
      } else if (dealerCards[i][0] === "A") {
        dealerCards[i][0] = 11;
        dealerAceCounter++;
      }
      if (playerCards[i][0] === "J" || playerCards[i][0] === "Q" || playerCards[i][0] === "K") {
        playerCards[i][0] = 10;
      } else if (playerCards[i][0] === "A") {
        playerCards[i][0] = 11;
        playerAceCounter++; 
      }
    }
    sumTheCards(dealerCards, playerCards);
  };

  //new conversion for player after initial deal
  var convertToNumbers1 = function(hitCard) {
      if (hitCard === "J" || hitCard === "Q" || hitCard === "K") {
        return 10;
      } else if (hitCard === "A") {
        playerAceCounter++;
        return checkAce();
      } else {
        return parseInt(hitCard);
      }
  };

  //new conversion for dealer after intial deal
  var convertToNumbers2 = function(hitCard) {
      if (hitCard === "J" || hitCard === "Q" || hitCard === "K") {
        return 10;
      } else if (hitCard === "A") {
        dealerAceCounter++;
        return 11;
      } else {
        return parseInt(hitCard);
      }
  };

  //sees if the ace will be an 11 or 1
  var checkAce = function() {
    do{
    var newAce = parseInt(window.prompt("1 or 11"));
    }while(isNaN(newAce) || newAce != "1" && newAce != "11");
    return newAce;
  };

  //sums the cards for player and dealer
  var sumTheCards = function(dealerCards, playerCards) {
    var dealerSum = 0;
    var playerSum = 0;
    for (i = 0; i < dealerCardCount; i++) {
      dealerSum = dealerSum + parseInt(dealerCards[i][0]);
    }
    for (j = 0; j < playerCardCount; j++) {
      playerSum = playerSum + parseInt(playerCards[j][0]);
    }
    checkForNatural(dealerSum, playerSum);
    if (dealerSum != 21 && playerSum != 21){
      hitOrStay(dealerSum, playerSum);
      doubleDown(dealerSum, playerSum);
    }
  };

//checks for natural blackjack
  var checkForNatural = function(dealerNatural, playerNatural) {
    if (dealerNatural === 21 && playerNatural === 21){
      payOutNatural(dealerNatural, playerNatural);
    } else if (dealerNatural === 21){
      payOutNatural(dealerNatural, playerNatural);
    } else if (playerNatural === 21) {
      payOutNatural(dealerNatural, playerNatural);
    }
  };

//checks for subsequent 21 values might not have needed.
  var checkForBlackJack = function(dealerBlackjack, playerBlackjack) {
    if (dealerBlackjack === 21){
      payOut(dealerBlackjack, playerBlackjack);
    } else if (playerBlackjack === 21) {
      dealerTurn(dealerBlackjack, playerBlackjack);
    }
  };

//hit or stay for the player
  var hitOrStay = function(dealerSum, playerSum) {
    $("<button>").addClass("hit").text("Hit").appendTo($("#container"));
    $(".hit").click(function() {
      $(".double-down").remove();
      playerSum = playerSum + hit();
      checkForPlayerBust(dealerSum, playerSum);
      checkForBlackJack(0, playerSum);
    });

    $("<button>").addClass("stay").text("Stay").appendTo($("#container"));
    $(".stay").click(function() {
      $(".hit").remove();
      $(".stay").remove();
      $(".double-down").remove();
      if (playerSum === 21){
        dealerTurn(dealerSum, playerSum);
      }
      dealerTurn(dealerSum, playerSum);
    });
  };

//double down function 
  var doubleDown = function(dealerSum, playerSum) {
    $("<button>").addClass("double-down").text("Double Down").appendTo($("#container"));
    $(".double-down").click(function() {
      if (playerBankRoll - betAmount >= 0) {
        $(".hit").remove();
        $(".stay").remove();
        $(".double-down").remove();
        playerBankRoll -= betAmount
        betAmount = betAmount*2;
        doubleDownCounter++;
        $("#current-payroll").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#bet-amount").html("<h3>" + "You're Currently Betting: " + betAmount);
        playerSum = playerSum + hit();
        checkForPlayerBust(dealerSum, playerSum);
        checkForBlackJack(0, playerSum);
        dealerTurn(dealerSum, playerSum);
      } else {
        alert("Not Enough Money!");
      }
    });
  };

//runs the hit for hitOrStay
  var hit = function(){
    var newCard = shuffledDeckUse[hitIncrement][0];
    $("<div>").addClass(shuffledDeckUse[hitIncrement][1] + shuffledDeckUse[hitIncrement][0]).addClass("dealt").appendTo($("#player"));
    hitIncrement++;
    playerCardCount++;
    return convertToNumbers1(newCard);
  };

  //checks if player busts
  var checkForPlayerBust = function(dealerSum, playerBust) {
    if (playerBust > 21 && doubleDownCounter === 1) {
      if (playerAceCounter === 0){
      } else if (playerAceCounter > 0){
          playerBust -= 10;
          playerAceCounter--;
          hitOrStay(dealerSum, playerBust);
      }
    }
    if (playerBust > 21 && doubleDownCounter === 0) {
      if (playerAceCounter === 0){
        dealerTurn(dealerSum, playerBust);
      } else if (playerAceCounter > 0){
          playerBust -= 10;
          playerAceCounter--;
          hitOrStay(dealerSum, playerBust);
        }
    }
  };

  //checks if dealer busts
  var checkForDealerBust = function(dealerSum, playerSum) {
    if (dealerSum > 21) {
      if (dealerAceCounter > 0) {
          dealerSum -= 10;
          dealerAceCounter -= 1;
          dealerTurn(dealerSum, playerSum);
      } else {
        payOut(dealerSum, playerSum);
      }
    } else {
        payOut(dealerSum, playerSum);
    }
  };

  //actions when it is the dealers turn
  var dealerTurn = function(dealerSum, playerSum){
    $(".hit").remove();
    $(".stay").remove();
    while (dealerSum <= 16) {
      dealerSum = dealerSum + convertToNumbers2(shuffledDeckUse[hitIncrement][0]);
      $("<div>").addClass(shuffledDeckUse[hitIncrement][1] + shuffledDeckUse[hitIncrement][0]).addClass("dealt").appendTo($("#dealer"));
      hitIncrement++;
      dealerCardCount++;
    }
    $("#hidden").removeAttr("id");
    checkForDealerBust(dealerSum, playerSum);
  };

//sees who wins
  var checkForWinner = function(dealer, player){
    if (dealer === player) {
      payOut(dealer, player);
    } else if (dealer > player) {
      payOut(dealer, player);
    } else {
      payOut(dealer, player);
    }
  };

//generates payout for natural blackjack
  var payOutNatural = function(dealer, player){
    $("#hidden").removeAttr("id");
    if (dealer === player){
      $("#actions").html("<h3>" + "Push!");
      playerBankRoll += betAmount;
      $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
      $("#payout").html("<h3>" + "Your Payout Is: " + betAmount);
      makePlayAgainButton();
    } else if (dealer === 21){
      $("#payout").html("<h3>" + "Your Payout Is: 0");
      makePlayAgainButton();
    } else if (player === 21){
      playerBankRoll += betAmount*2.5;
      $("#payout").html("<h3>" + "Your Payout Is: " + betAmount*2.5);
      makePlayAgainButton();
    }
  }

//generates payout for all other cases
  var payOut = function(dealerWin, playerWin) {
    if (dealerWin === playerWin && dealerWin <= 21 && playerWin <= 21){
        $("#actions").html("<h3>" + "Push!");
        playerBankRoll += betAmount;
        $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#payout").html("<h3>" + "Your Payout Is: " + betAmount);
        makePlayAgainButton();
    } else if (dealerWin === playerWin && dealerWin > 21 && playerWin > 21){
        $("#actions").html("<h3>" + "Both Busted!");
        playerBankRoll += betAmount;
        $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#payout").html("<h3>" + "Your Payout Is: " + betAmount);
        makePlayAgainButton();
    } else if (dealerWin > playerWin && dealerWin <= 21){
        $("#actions").html("<h3>" + "Dealer Wins!");
        $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#payout").html("<h3>" + "Your Payout Is: 0");
        makePlayAgainButton();
    } else if (dealerWin > playerWin && dealerWin > 21){
        $("#actions").html("<h3>" + "Dealer Busts!");
        playerBankRoll += betAmount*2;
        $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#payout").html("<h3>" + "Your Payout Is: "  + betAmount*2);
        makePlayAgainButton();
    } else if (dealerWin < playerWin && playerWin > 21){
        $("#actions").html("<h3>" + "Player Busts!");
        $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#payout").html("<h3>" + "Your Payout Is: 0");
        makePlayAgainButton();
    } else if (dealerWin < playerWin && playerWin <= 21){
        $("#actions").html("<h3>" + "Player Wins!");
        playerBankRoll += betAmount*2;
        $("#score").html("<h3>" + "Your Current Bankroll Is: " + playerBankRoll);
        $("#payout").html("<h3>" + "Your Payout Is: " + betAmount*2);
        makePlayAgainButton();
    }
  }

});