import { useEffect, useState } from "react";
import { GuessList } from "./guessContent/GuessList";
import { Keyboard } from "./Keyboard";
import Popup from "./Popup";
import wordsToGuess from "../../utils/wordsToGuess";
import { Toaster } from "react-hot-toast";

const lettersPressedDefaultVal = ["", "", "", "", "", ""];

export const GameBody = () => {
  const [lettersPressed, setLettersPressed] = useState<Array<string>>([
    ...lettersPressedDefaultVal,
  ]);
  const [gameResult, setGameResult] = useState("");
  const [shouldClosePopup, setShouldClosePopup] = useState(false);
  const [directionalOffset, setDirectionalOffset] = useState<number>(0);
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [incorrectGuessedLetters, setIncorrectGuessedLetters] = useState<
    Array<string>
  >([]);
  const [currentWordsToGuessIndex, setCurrentWordsToGuessIndex] =
    useState<number>(0);

  const wordToGuess = wordsToGuess[currentWordsToGuessIndex];

  const updateLettersPressed = (callBackFunc: (val: string) => string) => {
    setLettersPressed((currentValue) => {
      currentValue[currentRow] = callBackFunc(currentValue[currentRow]);

      return [...currentValue];
    });
  };

  const handlePopupClose = () => {
    setShouldClosePopup(true);
  };

  const handlePlayAgain = () => {
    setCurrentWordsToGuessIndex((currentValue) => {
      if (wordsToGuess.length > currentValue) {
        return ++currentValue;
      }

      return currentValue;
    });

    setLettersPressed([...lettersPressedDefaultVal]);
    setIncorrectGuessedLetters([]);
    setCurrentRow(0);
    setDirectionalOffset(0);
    setGameResult("");
    setShouldClosePopup(false);
  };

  useEffect(() => {
    if (currentRow !== 0) {
      setIncorrectGuessedLetters((currentValue) => {
        const updatedIncorrectGuessedLetters = [...currentValue];

        for (let i = 0; i < lettersPressed.length; i++) {
          const word = lettersPressed[i].toUpperCase();

          for (let j = 0; j < word.length; j++) {
            const char = word[j];
            const isNotInWordToGuess = !wordToGuess
              .toUpperCase()
              .includes(char);

            if (isNotInWordToGuess) {
              const isNotWithinIncorrectGuesses =
                !updatedIncorrectGuessedLetters.includes(char);

              if (isNotWithinIncorrectGuesses) {
                updatedIncorrectGuessedLetters.push(char);
              }
            }
          }
        }

        return updatedIncorrectGuessedLetters;
      });
    }
  }, [currentRow]);

  const currentGuess = lettersPressed[currentRow] || "";
  const popupMessage =
    gameResult === "winner" ? "Yay! Nice Guess!" : "Better luck next time :(";

  return (
    <div>
      <Toaster />

      <GuessList
        lettersPressed={lettersPressed}
        directionalOffset={directionalOffset}
        currentRow={currentRow}
        wordToGuess={wordToGuess}
        setGameResult={setGameResult}
      />
      <Keyboard
        gameResult={gameResult}
        lettersPressed={currentGuess}
        setLettersPressed={updateLettersPressed}
        directionalOffset={directionalOffset}
        setDirectionalOffset={setDirectionalOffset}
        setCurrentRow={setCurrentRow}
        incorrectGuessedLetters={incorrectGuessedLetters}
        setGameResult={setGameResult}
        wordToGuess={wordToGuess}
      />
      {gameResult && !shouldClosePopup ? (
        <Popup
          message={popupMessage}
          handlePopupClose={handlePopupClose}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
