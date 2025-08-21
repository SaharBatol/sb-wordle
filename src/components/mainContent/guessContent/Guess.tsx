import { useEffect, useState } from "react";

interface GuessPropsType {
  letterPressed: string;
}

export const Guess = ({ letterPressed }: GuessPropsType) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [letters, setLetters] = useState<string[]>(["", "", "", "", ""]);

  useEffect(() => {
    if (letterPressed !== "") {
      for (let i: number = 0; i < 5; i++) {
        if (i === currentPosition) {
          setLetters((currentValue) => {
            currentValue[currentPosition] = letterPressed;
            return currentValue;
          });

          setCurrentPosition((currentValue) => {
            return ++currentValue;
          });
        }
      }
    }
  }, [letterPressed]);

  return (
    <div className="guess-box-container">
      {letters.map((letter, i) => (
        <div key={i} className="guess-box">
          {letter}
        </div>
      ))}
    </div>
  );
};
