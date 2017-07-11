console.log('sanity check');

//initialize game as in progress
var inProgress = true;

//player1 starts with a red "car" in the first column
var player1_turn = 1;
var qUnicode;
var player1_win;

//player2 starts with a blue "car" in the first column
var player2_turn = 1;
var pUnicode;
var player2_win;

function player1_alert() {
  inProgress = false;
  alert("Player 1 wins!");
};

function player2_alert() {
  inProgress = false;
  alert("Player 2 wins!");
};

//gameplay functions
if (inProgress) {

  // function that runs player 1's "car"
  $(document).keydown(function player1_keydown(event) {

    qUnicode = event.keyCode;

    //every time player1 presses the Q key, the red "car" moves 1 column to the right
    if (qUnicode === 81) { // 81 is the Q key

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
        player1_alert();
      };

    };

  });


  // //function that runs player 2's "car"
  $(document).keydown(function player2_keydown(event) {

    pUnicode = event.keyCode;

    //every time player2 presses the P key, the blue "car" moves 1 column to the right
    if (pUnicode === 80) { // 80 is the P key

      player2_turn += 1;

      if (player2_turn === 2) {
        $("#box201").css("background-color", "white");
        $("#box202").css("background-color", "blue");
      } else if (player2_turn === 3) {
        $("#box202").css("background-color", "white");
        $("#box203").css("background-color", "blue");
      } else if (player2_turn === 4) {
        $("#box203").css("background-color", "white");
        $("#box204").css("background-color", "blue");
      } else if (player2_turn === 5) {
        $("#box204").css("background-color", "white");
        $("#box205").css("background-color", "blue");
      } else if (player2_turn === 6) {
        $("#box205").css("background-color", "white");
        $("#box206").css("background-color", "blue");
      } else if (player2_turn === 7) {
        $("#box206").css("background-color", "white");
        $("#box207").css("background-color", "blue");
      } else if (player2_turn === 8) {
        $("#box207").css("background-color", "white");
        $("#box208").css("background-color", "blue");
      } else if (player2_turn === 9) {
        $("#box208").css("background-color", "white");
        $("#box209").css("background-color", "blue");
      } else if (player2_turn === 10) {
        $("#box209").css("background-color", "white");
        $("#box210").css("background-color", "blue");
      } else if (player2_turn === 11) {
        $("#box210").css("background-color", "white");
        $("#box211").css("background-color", "blue");
      } else if (player2_turn === 12) {
        $("#box211").css("background-color", "white");
        $("#box212").css("background-color", "blue");
        player2_alert();
      };

    };

  });

};
