import { Guess } from "./Guess";

export const GuessList = () => {
  const numOfGuesses = 6;
  const guessArray = [];

  for (let i: number = 0; i < numOfGuesses; i++) {
    guessArray.push(<Guess key={i} />);
  }

  return <div>{guessArray.map((guess) => guess)}</div>;
};
