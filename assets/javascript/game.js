//create a game where the player guesses a random variable
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);
//set the random variable to be letters (1-26)

//set the numnber of guesses (5)
// set variables for wins/losses
var wins = 0;
var losses = 0;
var numberGuesses = 5;
var lettersGuessed = []; //an array for players choices

// allow a box to show previous guesses
//if else if to restart the game

document.getElementById("#wins").textContent = wins
document.getElementById("#losses").textContent = losses 
// document.getElementById("#").textContent = numberGuesses

//function to start the game/clear the scores

document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    lettersGuessed.push(playerGuess);

    if(playerGuess == randomLetter) {
        wins++;
        
    }

}


// function startGame(){
//     randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//     wins= 0;
//     losses = 0;
//     numberGuesses = 5;

    

// }


