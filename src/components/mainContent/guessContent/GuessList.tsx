import { useState } from "react";
import { Guess } from "./Guess";

interface GuessListPropsType {
  lettersPressed: string;
}

export const GuessList = ({ lettersPressed }: GuessListPropsType) => {
  const [currentRow, setCurrentRow] = useState(0);
  const numOfGuesses = 6;
  const guesses = [];

  for (let i: number = 0; i < numOfGuesses; i++) {
    if (i === currentRow) {
      guesses.push(<Guess key={i} lettersPressed={lettersPressed} />);
    } else {
      guesses.push(<Guess key={i} lettersPressed="" />);
    }
  }

  return <div>{guesses.map((guess) => guess)}</div>;
};
