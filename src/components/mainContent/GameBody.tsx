import { useState } from "react";
import { GuessList } from "./guessContent/GuessList";
import { Keyboard } from "./Keyboard";

export const GameBody = () => {
  const [lettersPressed, setLettersPressed] = useState<Array<string>>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [directionalOffset, setDirectionalOffset] = useState<number>(0);
  const [currentRow, setCurrentRow] = useState<number>(0);

  const wordToGuess = "great";

  const updateLettersPressed = (callBackFunc: (val: string) => string) => {
    setLettersPressed((currentValue) => {
      currentValue[currentRow] = callBackFunc(currentValue[currentRow]);

      return [...currentValue];
    });
  };

  return (
    <div>
      <GuessList
        lettersPressed={lettersPressed}
        directionalOffset={directionalOffset}
        currentRow={currentRow}
        wordToGuess={wordToGuess}
      />
      <Keyboard
        lettersPressed={lettersPressed[currentRow]}
        setLettersPressed={updateLettersPressed}
        directionalOffset={directionalOffset}
        setDirectionalOffset={setDirectionalOffset}
        setCurrentRow={setCurrentRow}
      />
    </div>
  );
};
