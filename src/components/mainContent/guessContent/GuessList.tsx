import { Guess } from "./Guess";
import { generateColourCodedChars } from "../../../utils/util";

interface GuessListPropsType {
  lettersPressed: Array<string>;
  directionalOffset: number;
  currentRow: number;
  wordToGuess: string;
  setGameResult: React.Dispatch<React.SetStateAction<string>>;
}

export const GuessList = ({
  lettersPressed,
  directionalOffset,
  currentRow,
  wordToGuess,
  setGameResult,
}: GuessListPropsType) => {
  const guesses = [];

  for (let i: number = 0; i < lettersPressed.length; i++) {
    if (i === currentRow) {
      guesses.push(
        <Guess
          setGameResult={setGameResult}
          colourCodedGuessChars={[]}
          key={i}
          lettersPressed={lettersPressed[currentRow]}
          isCurrentGuess={true}
          directionalOffset={directionalOffset}
        />
      );
    } else {
      const currentWord = lettersPressed[i];
      const colourCodedGuessChars = generateColourCodedChars(
        wordToGuess,
        currentWord
      );

      guesses.push(
        <Guess
          setGameResult={setGameResult}
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
