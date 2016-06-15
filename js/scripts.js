// business logic
// var player1Score = 0;
// var player2Score = 0;

var player1Score = "0";
var player2Score = "0";

var turnTotal = "";
// var player1Total = [];
// var player2Total = [];

var diceRolls = function (roll) {
  roll = parseInt(Math.floor(Math.random() * 6 + 1) ); // roll for random number
  return roll;
}

// user interface logic
$(document).ready(function() {

  $("button#roll1").click(function() {

    $("#rollResult").text(" ");
    rollResult = diceRolls();

    $("#rollResult").text(rollResult + ", ");
    if (rollResult != 1) {
      var newTurnTotal = turnTotal[0] + rollResult;
      console.log("wake up!")

      turnTotal = newTurnTotal;
      $("turnResult").text(turnTotal);

    } else {
      turnTotal = 0;
      $("#turnResult").text(turnTotal);
      $("#player1Score").text(turnTotal);
      $("#rollResult").text("You lose your turn");
      $("#player1Buttons").hide();
      $("#player2Buttons").show();
      console.log("wake up!")
    }
  });

  $("button#hold1").click(function () {
    player1Score = turnTotal + player1Score; //parseInt(player1Score);
    turnTotal = 0;
    if (player1Score >= 100) {
      alert("Player 1 is the Winner")
    } else {
      ("#rollResult").text(" ");
      $("turnResult").text(" ");
      $("player1").text(player1Score);
      $("#player1Buttons").hide();
      $("#player2Buttons").show();
    }
  });

  $("button#roll2").click(function() {

    $("#rollResult").text(" ");
    rollResult = diceRolls();
    $("#rollResult").text(rollResult + ", ");
    if (rollResult != 1) {
      var newTurnTotal = turnTotal[0] + rollResult;
      turnTotal = newTurnTotal;
      $("turnResult").text(turnTotal);
    } else {
      turnTotal = 0;
      $("#turnResult").text(turnTotal);
      $("#player2Score").text(turnTotal);
      $("#rollResult").text("You lose your turn");
      $("#player2Buttons").hide();
      $("#player1Buttons").show();
    }
  });

  $("button#hold2").click(function () {
    player2Score = turnTotal + player2Score; //parseInt(player2Score);
    turnTotal = 0;
    if (player2Score >= 100) {
      alert("Player 2 is the Winner")
    } else {
      ("#rollResult").text(" ");
      $("turnResult").text(" ");
      $("player1").text(player1Score);
      $("#player2Buttons").hide();
      $("#player1Buttons").show();
    }
  });

  event.preventDefault();
});
