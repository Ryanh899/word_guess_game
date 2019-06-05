

var word = ['s', 'u', 'r', 'f'];
//defining the letters, gonna change later to randomly generate word
var firstLetter = "s";
var secondLetter = "u";
var thirdLetter = "r";
var fourthLetter = "f";

//making variable for event
var userGuess = document.onkeyup

//empty array for wrong guesses to be pushed into
var wordBank = [];
var repeatedLetters = [];

//function to stop repeats from occuring?
var letterBank = function () {

}
// guess counter variable  
var guessesLeft = 12;
var letter = false;
//function for user imput
document.onkeyup = function (event) {
    console.log(event.key);
    var key = event.key;
    var match = false;
    wordBank.forEach(function (item) {
        if (key === item) {
            match = true;
            console.log(`array.item: ${item}`);
            console.log(`======= MATCH! =======\n`);
        }
        if (match === true) {
            repeatedLetters.push(key);
            console.log(repeatedLetters)
        }
    })
    if (key === firstLetter) {
        document.getElementById('first').innerHTML = event.key;
    }
    else if (key === secondLetter) {
        document.getElementById('second').innerHTML = event.key
    }
    else if (key === thirdLetter) {
        document.getElementById('third').innerHTML = event.key
    }
    else if (key === fourthLetter) {
        document.getElementById('fourth').innerHTML = event.key
    } else {
        if (match === true) {
            repeatedLetters.push(event.key);
        }
        else {
            wordBank.push(event.key);
            wordBank.toString();
            document.getElementById('wordBank').textContent = "Guesses: " + wordBank;
            guessesLeft--
            guess();
        }
    }
}

//function for writing Guess counter
var guess = function () {
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guessesLeft
}




