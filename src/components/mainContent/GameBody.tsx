import { useState } from "react";
import { GuessList } from "./guessContent/GuessList";
import { Keyboard } from "./Keyboard";

export const GameBody = () => {
  const [letterPressed, setLetterPressed] = useState("");

  return (
    <div>
      <GuessList letterPressed={letterPressed} />
      <Keyboard setLetterPressed={setLetterPressed} />
    </div>
  );
};
