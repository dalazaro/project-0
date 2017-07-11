console.log('sanity check');


//player1 starts with a red "car" in the first column
//when a specific key is pressed, the "car" moves 1 column to the right

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
  }


});
