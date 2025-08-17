import { GuessList } from "./guessContent/GuessList";
import { Keyboard } from "./Keyboard";

export const GameBody = () => {
  return (
    <div>
      <GuessList />
      <Keyboard />
    </div>
  );
};
