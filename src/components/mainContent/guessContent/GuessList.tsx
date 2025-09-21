import { useState } from "react";
import { Guess } from "./Guess";

interface GuessListPropsType {
  lettersPressed: Array<string>;
  directionalOffset: number;
  currentRow: number;
  wordToGuess: string;
}

export const GuessList = ({
  lettersPressed,
  directionalOffset,
  currentRow,
  wordToGuess,
}: GuessListPropsType) => {
  const guesses = [];

  for (let i: number = 0; i < lettersPressed.length; i++) {
    if (i === currentRow) {
      guesses.push(
        <Guess
          colourCodedGuessChars={[]}
          key={i}
          lettersPressed={lettersPressed[currentRow]}
          isCurrentGuess={true}
          directionalOffset={directionalOffset}
        />
      );
    } else {
      const currWord = lettersPressed[i];
      const colourCodedGuessChars = [];

      if (currWord.length === 5) {
        for (let j = 0; j < currWord.length; j++) {
          colourCodedGuessChars.push("grey");

          for (let k = 0; k < wordToGuess.length; k++) {
            if (currWord[j].toUpperCase() === wordToGuess[k].toUpperCase()) {
              if (j === k) {
                colourCodedGuessChars[j] = "green";
              } else {
                colourCodedGuessChars[j] = "orange";
              }

              break;
            }
          }
        }
      }

      guesses.push(
        <Guess
          colourCodedGuessChars={colourCodedGuessChars}
          key={i}
          lettersPressed={lettersPressed[i]}
          isCurrentGuess={false}
          directionalOffset={0}
        />
      );
    }
  }

  return <div>{guesses.map((guess) => guess)}</div>;
};
