import { useState } from "react";
import { GuessList } from "./guessContent/GuessList";
import { Keyboard } from "./Keyboard";

export const GameBody = () => {
  const [lettersPressed, setLettersPressed] = useState<string>("");
  const [directionalOffset, setDirectionalOffset] = useState<number>(0);
  console.log(directionalOffset);
  return (
    <div>
      <GuessList
        lettersPressed={lettersPressed}
        directionalOffset={directionalOffset}
      />
      <Keyboard
        lettersPressed={lettersPressed}
        setLettersPressed={setLettersPressed}
        directionalOffset={directionalOffset}
        setDirectionalOffset={setDirectionalOffset}
      />
    </div>
  );
};
