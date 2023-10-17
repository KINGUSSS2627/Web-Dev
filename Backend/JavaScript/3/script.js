var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];

function randomChooseColor(num) {
    return buttonColors[num];
}

var started = false;
var level = 0;

$(document).on("keypress", function () {
    if (!started) {
        $("h1").text("level " + level);
        newSequence();
        started = true;
    }
});

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        if (gamePattern.length === userClickPattern.length) {
            setTimeout(function () { newSequence(); }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () { $("body").removeClass("game-over"); }, 200);
        startOver();
    }
}

function newSequence() {
    userClickPattern = [];
    level++;
    $("h1").text("level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var color = randomChooseColor(randomNumber);
    gamePattern.push(color);

    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () { $("#" + color).removeClass("pressed"); }, 100);
}

function playSound(userChosenColor) {
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
}

function startOver() {
    $("h1").append(high_Score);
    started = false;
    level = 0;
    var gamePattern = [];
}
