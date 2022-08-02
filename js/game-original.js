$(document).keydown(startGame);

var buttonColors = ["red", "blue", "green", "yellow"];
var randomColor = Math.floor(Math.random() * buttonColors.length);
// var levelCounter = 0;
// levelCounter++;

function startGame() {
    // $(document).off("keydown");
    // $("h1").text("Level " + levelCounter);
    $("." + buttonColors[randomColor]).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    makeSound();
}

// $(".btn").click(gamePlay);

// function gamePlay() {
//     $(document).off("keydown");
//     $("h1").text("Level " + levelCounter);
//     $("." + buttonColors[randomNumber]).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
//     makeSound();
// };

function makeSound() {
    switch (buttonColors[randomColor]) {
        case "red":
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;
        case "blue":
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();
            break;
        case "green":
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            break;
        default:
    }
}

