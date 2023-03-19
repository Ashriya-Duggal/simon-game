// var userClickedPattern = [];

// var gamePattern = [];

// var buttonColor = ["red", "blue", "green", "yellow"];

// var started = false;
// var level = 1;

// $(document).keypress(function () {
//   if (!started) {
//     $("h1").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });


// function nextSequence() {
//   userClickedPattern = [];
//   $("h1").text("Level " + level);
//   level++;
//   var randomNumber = Math.random();
//   randomNumber = Math.floor(randomNumber * 4);
//   var randomChosencolor = buttonColor[randomNumber];
//   gamePattern.push(randomChosencolor);
//   $("#" + randomChosencolor)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);
//   animatePress(randomChosencolor);
//   playSound(randomChosencolor);
// }


// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     playSound("wrong");
//     $("body").addClass("game-over");
//     $("h1").text("Game Over, press any key to restart");
//     setTimeout(function(){
//     $("body").removeClass("game-over");},200);
//     startOver();
//   }
// }
// function playSound(name) {
//   var audio = new Audio("sound/" + name + ".mp3");
//   audio.play();
// }

// $(".btn").click(function () {
//   var userChosenColor = $(this).attr("id");
//   userClickedPattern.push(userChosenColor);
//   playSound(userChosenColor);
//   animatePress(userChosenColor);
//   checkAnswer(userClickedPattern.length - 1);
// });

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function startOver() {
//   started = false;
//   level=1;
//   gamePattern = [];
// }
























var userClickedPattern = [];

var gamePattern = [];

var buttonColor = ["red", "blue", "green", "yellow"];

var started = true;
var level = 1;

$(document).keypress(function () {
  if (started == true) {
    $("h1").text("Level " + level);
    nextSequence();

    started = false;
  }

});
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, press any key to restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    
      startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  $("h1").text("Level " + level);
  level++;
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 4);
  var randomChosencolor = buttonColor[randomNumber];
  gamePattern.push(randomChosencolor);
  $("#" + randomChosencolor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  animatePress(randomChosencolor);
  playSound(randomChosencolor);
}

function playSound(name) {
  var audio = new Audio("sound/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  started = true;
  gamePattern = [];
  level = 1;
}
