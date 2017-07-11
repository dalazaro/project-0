console.log('sanity check');

//initialize game as in progress
var inProgress = true;

//player1 starts with a red "car" in the first column
var player1_turn = 0;
var qKeycode;

//player2 starts with a blue "car" in the first column
var player2_turn = 0;
var pKeycode;

//functions to end the race
function player1_alert() {
  inProgress = false;
  $('.winnerAlert').append(`<h1>PLAYER 1 WINS!</h1>`);
};

function player2_alert() {
  inProgress = false;
  $('.winnerAlert').append(`<h1>PLAYER 2 WINS!</h1>`);
};

$(document).ready(function() {

  $("#box101").css("background-color", "#FF332A");
  $("#box201").css("background-color", "#0047BA");

  // function that runs player 1's "car"
  $(document).on("keydown", function player1_keydown(event) {

    qKeycode = event.keyCode;

    //the faster player1 taps the Q key (keyCode 81) while the game is in progress, the faster the red "car" will move to the right.
    if (qKeycode === 81 && inProgress) {

      player1_turn += 1;

      //to simulate car shifting, the turn count between intervals gets shorter the farther the "car" has traveled
      if (player1_turn === 3) {
        $("#box101").css("background-color", "#202020");
        $("#box102").css("background-color", "#FF332A");
      } else if (player1_turn === 6) {
        $("#box102").css("background-color", "#202020");
        $("#box103").css("background-color", "#FF332A");
      } else if (player1_turn === 9) {
        $("#box103").css("background-color", "#202020");
        $("#box104").css("background-color", "#FF332A");
      } else if (player1_turn === 12) {
        $("#box104").css("background-color", "#202020");
        $("#box105").css("background-color", "#FF332A");
      } else if (player1_turn === 14) {
        $("#box105").css("background-color", "#202020");
        $("#box106").css("background-color", "#FF332A");
      } else if (player1_turn === 16) {
        $("#box106").css("background-color", "#202020");
        $("#box107").css("background-color", "#FF332A");
      } else if (player1_turn === 18) {
        $("#box107").css("background-color", "#202020");
        $("#box108").css("background-color", "#FF332A");
      } else if (player1_turn === 20) {
        $("#box108").css("background-color", "#202020");
        $("#box109").css("background-color", "#FF332A");
      } else if (player1_turn === 21) {
        $("#box109").css("background-color", "#202020");
        $("#box110").css("background-color", "#FF332A");
      } else if (player1_turn === 22) {
        $("#box110").css("background-color", "#202020");
        $("#box111").css("background-color", "#FF332A");
      } else if (player1_turn === 23) {
        $("#box111").css("background-color", "#202020");
        $("#box112").css("background-color", "#FF332A");
        player1_alert();
      };

    };

  });


  // //function that runs player 2's "car"
  $(document).on("keydown", function player2_keydown(event) {

    pKeycode = event.keyCode;

    //the faster player2 taps the P key (keyCode 80) while the game is in progress, the faster the blue "car" will move to the right.
    if (pKeycode === 80 && inProgress) {

      player2_turn += 1;

      //to simulate car shifting, the turn count between intervals gets shorter the farther the "car" has traveled
      if (player2_turn === 3) {
        $("#box201").css("background-color", "#202020");
        $("#box202").css("background-color", "#0047BA");
      } else if (player2_turn === 6) {
        $("#box202").css("background-color", "#202020");
        $("#box203").css("background-color", "#0047BA");
      } else if (player2_turn === 9) {
        $("#box203").css("background-color", "#202020");
        $("#box204").css("background-color", "#0047BA");
      } else if (player2_turn === 12) {
        $("#box204").css("background-color", "#202020");
        $("#box205").css("background-color", "#0047BA");
      } else if (player2_turn === 14) {
        $("#box205").css("background-color", "#202020");
        $("#box206").css("background-color", "#0047BA");
      } else if (player2_turn === 16) {
        $("#box206").css("background-color", "#202020");
        $("#box207").css("background-color", "#0047BA");
      } else if (player2_turn === 18) {
        $("#box207").css("background-color", "#202020");
        $("#box208").css("background-color", "#0047BA");
      } else if (player2_turn === 20) {
        $("#box208").css("background-color", "#202020");
        $("#box209").css("background-color", "#0047BA");
      } else if (player2_turn === 21) {
        $("#box209").css("background-color", "#202020");
        $("#box210").css("background-color", "#0047BA");
      } else if (player2_turn === 22) {
        $("#box210").css("background-color", "#202020");
        $("#box211").css("background-color", "#0047BA");
      } else if (player2_turn === 23) {
        $("#box211").css("background-color", "#202020");
        $("#box212").css("background-color", "#0047BA");
        player2_alert();
      };

    };

  });

  //the page will reload when the race is completed and a user hits the Enter button
  $(document).on("keydown", function reset(event) {

    pKeycode = event.keyCode;

  //the page will not reload while a race is in progress
    if (qKeycode === 13 && inProgress === false) {
      location.reload()
    };

  });

});
