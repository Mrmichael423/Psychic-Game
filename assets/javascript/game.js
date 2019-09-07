var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 12;
var letterGuessed = [];
var computerChoice = letters[Math.floor(math.random() * letters.length)];
//  console.log(computerChoice)

 document.onkeypress = function(event) {
    var userGuess = event.key;
    // console.log(userGuess)
    if(userGuess === computerChoice) {
        wins++
    } else {
        guesses--;
        userGuess.push(letterGuessed) 
    } if (guesses = 0) {
        losses++
    }
    
}
