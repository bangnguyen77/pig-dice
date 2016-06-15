// business logic
var player1Score = 0;
var player2Score = 0;

// var player1Score = "0";
// var player2Score = "0";

var totalScore = 0;
// var player1Total = [];
// var player2Total = [];

var diceRolls = function (roll) {
  roll = parseInt(Math.floor(Math.random() * 6 + 1) ); // roll for random number
  return roll;
}

// user interface logic
$(document).ready(function() {
  event.preventDefault();

  $("button#roll1").click(function() {

    $("#rollResult").text("");
    rollResult = diceRolls();
    $("#rollResult").append(rollResult + ", ");
    if (rollResult != 1) {
      var newTotalScore = parseInt(totalScore) + rollResult;
      totalScore = newTotalScore;
      $("turnResult").text(totalScore);
    } else {
      totalScore = 0;
      $("turnResult").text(totalScore);
      $("rollResult").text("You lose your turn");
      $("player1Buttons").hide();
      $("player2Buttons").show();
    }

  });

  $("button#hold1").click(function () {
    player1Score = totalScore + parseInt(player1Score);
    totalScore = 0;
    if (player1Score >= 100) {
      alert("Player 1 is the Winnder")
    } else {
      ("#rollResult").text(" ");
      $("turnResult").text(" ");
      $("player1").text(player1Score);
      $("#player1Buttons").hide();
      $("#player2Buttons").show();
    }
  });


});
