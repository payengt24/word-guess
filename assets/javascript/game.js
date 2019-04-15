console.log('here');

var wordList = ['payeng', 'who', 'what', 'where', 'when'];

var wrongGuesses = [];
var guessedLeft = 9;
var wins = 0;
var losess = 0;
var choosenWord = '';
var blanks = [];
var numChoosenWordLetter = 0;
var lettersInChoosenWords = []

function gameStart() {
  guessedLeft = 9;
  blanks = []
  choosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log('choosenWord---', choosenWord)

lettersInChoosenWords = choosenWord.split('')
  console.log('lettersInChoosenWords', lettersInChoosenWords)

  numChoosenWordLetter = lettersInChoosenWords.length;
  console.log('numChoosenWordLetter', numChoosenWordLetter)

  //reset wrong guesses
  wrongGuesses = []

  for (let i = 0; i < numChoosenWordLetter; i++) {
    blanks.push("_");
  }

  console.log('blanks', blanks);

  document.querySelector('#blanks').innerHTML = blanks.join(' ')
  document.querySelector('#guessedLeft').innerHTML = guessedLeft
  document.querySelector('#wrongGuesses').innerHTML = wrongGuesses.join(', ')
}

function checkLetter(letter) {
  var letterInWord = false;

  for (let i = 0; i < numChoosenWordLetter; i++) {
    console.log('choosenWord111', choosenWord)
    if (choosenWord[i] === letter) {
      letterInWord = true
    }
  }

  console.log('letterInWord', letterInWord)

  //replacing the blank to letter if the letter is part of the choosen word
  if (letterInWord) {
    console.log('=====', letterInWord)
    for (let j = 0; j < numChoosenWordLetter; j++) {
      if (choosenWord[j] === letter) {
        blanks[j] = letter
      }
    }
  } else {

        if (wrongGuesses.indexOf(letter) > -1) {
            
        } else {
            wrongGuesses.push(letter);
            guessedLeft--;
        }
  }
  console.log('blanks--', numChoosenWordLetter);

}

function roundCompleted() {

  document.querySelector('#wrongGuesses').innerHTML = wrongGuesses.join(', ')
  document.querySelector('#guessedLeft').innerHTML = guessedLeft
  document.getElementById("blanks").innerHTML = blanks.join(" ");

  if (lettersInChoosenWords.toString() === blanks.toString()) {
    alert("You win!");
    wins++;
    document.getElementById("wins").innerHTML = wins;
    gameStart();
  }

  if (guessedLeft === 0) {
    alert('Game Over')
    losess++
    document.getElementById("losses").innerHTML = losess;
    gameStart();
  }
}

document.onkeydown = function (event) {
  var letter = event.key.toLowerCase();
      console.log(letter.length);
    if (letter.length === 1 && /[a-z]/.exec(letter)) {
        checkLetter(letter);
    }

  roundCompleted()
  console.log(letter);
}

gameStart();
