import { useState } from "react";
import { Guess } from "./Guess";

interface GuessListPropsType {
  lettersPressed: string;
  directionalOffset: number;
}

export const GuessList = ({
  lettersPressed,
  directionalOffset,
}: GuessListPropsType) => {
  const [currentRow, setCurrentRow] = useState<number>(0);
  const numOfGuesses = 6;
  const guesses = [];

  for (let i: number = 0; i < numOfGuesses; i++) {
    if (i === currentRow) {
      guesses.push(
        <Guess
          key={i}
          lettersPressed={lettersPressed}
          isCurrentGuess={true}
          directionalOffset={directionalOffset}
        />
      );
    } else {
      guesses.push(
        <Guess
          key={i}
          lettersPressed=""
          isCurrentGuess={false}
          directionalOffset={0}
        />
      );
    }
  }

  return <div>{guesses.map((guess) => guess)}</div>;
};
