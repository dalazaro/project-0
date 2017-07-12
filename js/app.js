console.log('sanity check');

//initialize game as in progress
var inProgress = true;

//player1 starts with a red truck in the first column
var player1_turn = 0;
var qKeycode;

//player2 starts with a blue truck in the first column
var player2_turn = 0;
var pKeycode;

//functions to end the race
function player1_alert() {
  inProgress = false;
  $('.winnerAlert').append(`<h1 id="player1_win">BLAZE WINS!</h1>`);
};

function player2_alert() {
  inProgress = false;
  $('.winnerAlert').append(`<h1 id="player2_win">CRUSHER WINS!</h1>`);
};

$(document).ready(function() {

  $("#box101").html(`<img src="imgs/blaze.jpg">`);
  $("#box201").html(`<img src="imgs/crusher.jpg">`);

  // function that runs player 1's truck
  $(document).on("keydown", function player1_keydown(event) {

    qKeycode = event.keyCode;

    //the faster player1 taps the Q key (keyCode 81) while the game is in progress, the faster the red truck will move to the right.
    if (qKeycode === 81 && inProgress) {

      player1_turn += 1;

      //to simulate car shifting, the turn count between intervals gets shorter the farther the truck has traveled
      if (player1_turn === 3) {
        $("#box101 img").remove();
        $("#box102").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 6) {
        $("#box102 img").remove();
        $("#box103").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 9) {
        $("#box103 img").remove();
        $("#box104").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 11) {
        $("#box104 img").remove();
        $("#box105").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 13) {
        $("#box105 img").remove();
        $("#box106").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 15) {
        $("#box106 img").remove();
        $("#box107").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 17) {
        $("#box107 img").remove();
        $("#box108").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 18) {
        $("#box108 img").remove();
        $("#box109").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 19) {
        $("#box109 img").remove();
        $("#box110").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 20) {
        $("#box110 img").remove();
        $("#box111").html(`<img src="imgs/blaze.jpg">`);
      } else if (player1_turn === 21) {
        $("#box111 img").remove();
        $("#box112").html(`<img src="imgs/blaze.jpg">`);
        player1_alert();
      };

    };

  });


  // //function that runs player 2's truck
  $(document).on("keydown", function player2_keydown(event) {

    pKeycode = event.keyCode;

    //the faster player2 taps the P key (keyCode 80) while the game is in progress, the faster the blue truck will move to the right.
    if (pKeycode === 80 && inProgress) {

      player2_turn += 1;

      //to simulate car shifting, the turn count between intervals gets shorter the farther the truck has traveled
      if (player2_turn === 3) {
        $("#box201 img").remove();
        $("#box202").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 6) {
        $("#box202 img").remove();
        $("#box203").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 9) {
        $("#box203 img").remove();
        $("#box204").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 11) {
        $("#box204 img").remove();
        $("#box205").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 13) {
        $("#box205 img").remove();
        $("#box206").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 15) {
        $("#box206 img").remove();
        $("#box207").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 17) {
        $("#box207 img").remove();
        $("#box208").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 18) {
        $("#box208 img").remove();
        $("#box209").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 19) {
        $("#box209 img").remove();
        $("#box210").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 20) {
        $("#box210 img").remove();
        $("#box211").html(`<img src="imgs/crusher.jpg">`);
      } else if (player2_turn === 21) {
        $("#box211 img").remove();
        $("#box212").html(`<img src="imgs/crusher.jpg">`);
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
