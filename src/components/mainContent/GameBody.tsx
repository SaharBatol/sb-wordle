import { useState } from "react";
import { GuessList } from "./guessContent/GuessList";
import { Keyboard } from "./Keyboard";

export const GameBody = () => {
  const [lettersPressed, setLettersPressed] = useState<string>("");
  const [buttonPressed, setButtonPressed] = useState("");

  return (
    <div>
      <GuessList lettersPressed={lettersPressed} />
      <Keyboard
        setLettersPressed={setLettersPressed}
        setButtonPressed={setButtonPressed}
      />
    </div>
  );
};
