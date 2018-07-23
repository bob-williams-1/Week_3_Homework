//a list of all the computer choices 

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]; 

//sets all variables to zero - letter to guess is undefined 

var wins = 0
var losses = 0
var guesses  = 0
var guessesLeft = 0
var guessedLetters = [];
var letterToGuess = undefined


//functions for the "new" variables after game begins and user pushes keys
//this is where connect to HTML to fill in visual data for user 

var newGuessesLeft = function() {
   document.querySelector("#guessLeft").innerHTMK = "Guesses Left " + guessesLeft
}


//computer chooses random letter 

var newLetterToGuess = function() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

//store all keys pressed 


var newGuessesSoFar = function() {

    document.querySelector(`#userguess`).innerHTML = "Your Guesses so far:" + guessedLetters.join(`,`); 


}


//function reset 



var reset = function() {

guessesLeft = 9;
guessedLetters = [];

newLetterToGuess();
newGuessesLeft();
newGuessesSoFar(); 

}









//When key is pressed and released it reduce guessesLeft by 1.

    document.onkeyup = function(events) {

    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters); 

    }







    // update guesses 
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    //win lose reset

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Wow! You are awsome! Try another!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("You suck. Try again!");

        reset();
    }
};