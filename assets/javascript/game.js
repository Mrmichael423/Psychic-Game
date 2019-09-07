var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
// console.log(wins)
var losses = 0;
// console.log(losses)
var guesses = 12;
// console.log(guesses)
var letterGuessed = [];
// console.log(letterGuessed)
var winText = document.getElementById("win");

var lossText = document.getElementById("loss");

var guessText = document.getElementById("guess");

var leftText = document.getElementById("left");


var computerChoice = letters[Math.floor(Math.random() * letters.length)];
 console.log(computerChoice)

 document.onkeypress = function(event) {
    var userGuess = event.key;
    // console.log(userGuess)
    if(userGuess === computerChoice) {
        wins++
    } else {
        // letterGuessed.includes(userGuess)
        guesses--;
    } if (guesses = 0) {
        losses++
    }
};

winText.textContent = "Wins: " + wins;
lossText.textContent = "Losses: " + losses;
guessText.textContent = "Guesses left: " + guesses;
leftText.textContent = "Letters guessed: " + leftText;


