import { useState } from "react";
import { Guess } from "./Guess";

interface GuessListPropsType {
  letterPressed: string;
}

export const GuessList = ({ letterPressed }: GuessListPropsType) => {
  const [currentRow, setCurrentRow] = useState(0);
  const numOfGuesses = 6;
  const guesses = [];

  for (let i: number = 0; i < numOfGuesses; i++) {
    if (i === currentRow) {
      guesses.push(<Guess key={i} letterPressed={letterPressed} />);
    } else {
      guesses.push(<Guess key={i} letterPressed="" />);
    }
  }

  return <div>{guesses.map((guess) => guess)}</div>;
};
