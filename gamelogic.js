function displayWordSoFar(word, guesses) {
  
  let displayedWord = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const isGuessed = guesses.includes(letter); // guesses.includes(word[i]);

    if (isGuessed) {
      displayedWord += letter + " ";
    } else {
      displayedWord += "_ ";
    }
  }
  return displayedWord;
}
// console.log(displayWordSoFar("javascript", []));


function isGameWon(word, guesses) {
  
  let displayedWord = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const isGuessed = guesses.includes(letter); // guesses.includes(word[i]);

    if (isGuessed) {
      displayedWord += letter + " ";
    } else {
      displayedWord += "_ ";
    }
  } 
  
  if (!displayedWord.includes("_")) {
    return true;
  } else {
    return false;
  }
}


function isGameLost(word, guesses) {
  
  let counter = 0;
  
  for (let i = 0; i < guesses.length; i++) {
    const guessedLetter = guesses[i];
    const isGuessed = word.includes(guessedLetter);

    if (!isGuessed) {
      counter += 1;
    } 
  }
  if (counter > 6) {
    return true;
  } else {
    return false;
  }
}

function faults(word, guesses) {
  
  let counter = 0;
  
  for (let i = 0; i < guesses.length; i++) {
    const guessedLetter = guesses[i];
    const isGuessed = word.includes(guessedLetter);

    if (!isGuessed) {
      counter += 1;
    } 
  }
  return counter + " fout van de 7"
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  faults: faults,
};