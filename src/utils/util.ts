export function generateColourCodedChars(
  wordToGuess: string,
  currentWord: string
): Array<string> {
  const colourCodedGuessChars = [];

  // currentWord = ppale
  // wordToGuess = a ple

  if (currentWord.length === 5) {
    const updateWordToGuess = (currentCharIndex: number) => {
      for (let l = 0; l < wordToGuess.length; l++) {
        if (currentCharIndex === l) {
          const wordsToGuessArr = wordToGuess.split("");
          wordsToGuessArr[l] = " ";
          wordToGuess = wordsToGuessArr.join("");
        }
      }
    };

    for (let j = 0; j < currentWord.length; j++) {
      colourCodedGuessChars.push("grey");

      for (let k = 0; k < wordToGuess.length; k++) {
        const isTheSameChar =
          currentWord[j].toUpperCase() === wordToGuess[k].toUpperCase();

        if (isTheSameChar && j === k) {
          updateWordToGuess(k);

          colourCodedGuessChars[j] = "green";
          break;
        }
      }
    }

    for (let j = 0; j < currentWord.length; j++) {
      if (colourCodedGuessChars[j] === "green") {
        continue;
      }

      for (let k = 0; k < wordToGuess.length; k++) {
        const isTheSameChar =
          currentWord[j].toUpperCase() === wordToGuess[k].toUpperCase();

        if (isTheSameChar) {
          updateWordToGuess(k);

          colourCodedGuessChars[j] = "orange";
          break;
        }
      }
    }
  }

  return colourCodedGuessChars;
}

export function validateGuess(colourCodedGuessChars: Array<string>) {
  let isAllGreen = true;

  if (colourCodedGuessChars.length === 0) {
    isAllGreen = false;
  }

  for (let i = 0; i < colourCodedGuessChars.length; i++) {
    if (colourCodedGuessChars[i] !== "green") {
      isAllGreen = false;
      break;
    }
  }

  if (isAllGreen) {
    return "winner";
  }

  return "loser";
}
