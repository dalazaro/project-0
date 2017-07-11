console.log('sanity check');

//player1 starts with a red "car" in the first column
//every time player1 presses a specific designated key (Q), the red "car" moves 1 column to the right

//player2 starts with a blue "car" in the first column
//every time player2 presses a specific designated key (P), the blue "car" moves 1 column to the right

var player1_turn = 0;

$(document).keydown(function() {

  player1_turn += 1;

  if (player1_turn === 2) {
    $("#box101").css("background-color", "white");
    $("#box102").css("background-color", "red");
  } else if (player1_turn === 3) {
    $("#box102").css("background-color", "white");
    $("#box103").css("background-color", "red");
  } else if (player1_turn === 4) {
    $("#box103").css("background-color", "white");
    $("#box104").css("background-color", "red");
  } else if (player1_turn === 5) {
    $("#box104").css("background-color", "white");
    $("#box105").css("background-color", "red");
  } else if (player1_turn === 6) {
    $("#box105").css("background-color", "white");
    $("#box106").css("background-color", "red");
  } else if (player1_turn === 7) {
    $("#box106").css("background-color", "white");
    $("#box107").css("background-color", "red");
  } else if (player1_turn === 8) {
    $("#box107").css("background-color", "white");
    $("#box108").css("background-color", "red");
  } else if (player1_turn === 9) {
    $("#box108").css("background-color", "white");
    $("#box109").css("background-color", "red");
  } else if (player1_turn === 10) {
    $("#box109").css("background-color", "white");
    $("#box110").css("background-color", "red");
  } else if (player1_turn === 11) {
    $("#box110").css("background-color", "white");
    $("#box111").css("background-color", "red");
  } else if (player1_turn === 12) {
    $("#box111").css("background-color", "white");
    $("#box112").css("background-color", "red");
  };

});
