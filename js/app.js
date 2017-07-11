console.log('sanity check');

//initialize game as in progress
var inProgress = true;

//player1 starts with a red "car" in the first column
var player1_turn = 1;
var qKeycode;

//player2 starts with a blue "car" in the first column
var player2_turn = 1;
var pKeycode;

function player1_alert() {
  inProgress = false;
  setTimeout(function() {
    alert("Player 1 wins!");
  }, 5);
};

function player2_alert() {
  inProgress = false;
  setTimeout(function() {
    alert("Player 2 wins!");
  }, 5);
};

$(document).ready(function() {

    // function that runs player 1's "car"
    $(document).on("keydown", function player1_keydown(event) {

      qKeycode = event.keyCode;

      //every time player1 presses the Q key (keyCode 81), the red "car" moves 1 column to the right
      if (qKeycode === 81 && inProgress) {

        player1_turn += 1;

        if (player1_turn === 2) {
          $("#box101").css("background-color", "#202020");
          $("#box102").css("background-color", "red");
        } else if (player1_turn === 3) {
          $("#box102").css("background-color", "#202020");
          $("#box103").css("background-color", "red");
        } else if (player1_turn === 4) {
          $("#box103").css("background-color", "#202020");
          $("#box104").css("background-color", "red");
        } else if (player1_turn === 5) {
          $("#box104").css("background-color", "#202020");
          $("#box105").css("background-color", "red");
        } else if (player1_turn === 6) {
          $("#box105").css("background-color", "#202020");
          $("#box106").css("background-color", "red");
        } else if (player1_turn === 7) {
          $("#box106").css("background-color", "#202020");
          $("#box107").css("background-color", "red");
        } else if (player1_turn === 8) {
          $("#box107").css("background-color", "#202020");
          $("#box108").css("background-color", "red");
        } else if (player1_turn === 9) {
          $("#box108").css("background-color", "#202020");
          $("#box109").css("background-color", "red");
        } else if (player1_turn === 10) {
          $("#box109").css("background-color", "#202020");
          $("#box110").css("background-color", "red");
        } else if (player1_turn === 11) {
          $("#box110").css("background-color", "#202020");
          $("#box111").css("background-color", "red");
        } else if (player1_turn === 12) {
          $("#box111").css("background-color", "#202020");
          $("#box112").css("background-color", "red");
          player1_alert(inProgress);
        };

      };

    });


    // //function that runs player 2's "car"
    $(document).on("keydown", function player2_keydown(event) {

      pKeycode = event.keyCode;

      //every time player2 presses the P key (keyCode 80), the blue "car" moves 1 column to the right
      if (pKeycode === 80 && inProgress) {

        player2_turn += 1;

        if (player2_turn === 2) {
          $("#box201").css("background-color", "#202020");
          $("#box202").css("background-color", "blue");
        } else if (player2_turn === 3) {
          $("#box202").css("background-color", "#202020");
          $("#box203").css("background-color", "blue");
        } else if (player2_turn === 4) {
          $("#box203").css("background-color", "#202020");
          $("#box204").css("background-color", "blue");
        } else if (player2_turn === 5) {
          $("#box204").css("background-color", "#202020");
          $("#box205").css("background-color", "blue");
        } else if (player2_turn === 6) {
          $("#box205").css("background-color", "#202020");
          $("#box206").css("background-color", "blue");
        } else if (player2_turn === 7) {
          $("#box206").css("background-color", "#202020");
          $("#box207").css("background-color", "blue");
        } else if (player2_turn === 8) {
          $("#box207").css("background-color", "#202020");
          $("#box208").css("background-color", "blue");
        } else if (player2_turn === 9) {
          $("#box208").css("background-color", "#202020");
          $("#box209").css("background-color", "blue");
        } else if (player2_turn === 10) {
          $("#box209").css("background-color", "#202020");
          $("#box210").css("background-color", "blue");
        } else if (player2_turn === 11) {
          $("#box210").css("background-color", "#202020");
          $("#box211").css("background-color", "blue");
        } else if (player2_turn === 12) {
          $("#box211").css("background-color", "#202020");
          $("#box212").css("background-color", "blue");
          player2_alert(inProgress);
        };

      };

    });

  $('#reset').click(function() {
    location.reload();
  });

});
