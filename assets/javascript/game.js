var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
// console.log("wins: " + wins)
var losses = 0;
// console.log("losses: " + losses)
var guesses = 12;
// console.log("guesses: " + guesses)
var letterGuessed = [];
// console.log("guessed letters: " + letterGuessed)
// the game its self
document.onkeypress = function(event) {
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    // console.log("computer choice " + computerChoice)
    var userGuess = event.key;
    letterGuessed.push(userGuess)
    // console.log(userGuess)
    
    if (userGuess === computerChoice) {
        wins++;
        guesses = 12;
        letterGuessed = [];
    } else {
        guesses--;
    } if (guesses === 0) {
    losses++;
    guesses = 12;
    letterGuessed = []
    }
    // documents to the page
    document.getElementById("win").innerHTML = "Wins: " + wins;
    
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    
    document.getElementById("guess").innerHTML = "Guesses left: " + guesses;
    
    for (var i = 0; i < letterGuessed.length; i++) {
    document.getElementById("left").innerHTML = "Letters guessed: " + letterGuessed;}

};


