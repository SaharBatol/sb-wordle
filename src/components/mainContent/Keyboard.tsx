import type React from "react";
import { generateColourCodedChars, validateGuess } from "../../utils/util";
import validWords from "../../utils/wordsList";
import toast from "react-hot-toast";

interface KeyboardPropsType {
  setLettersPressed: (callbackFunc: (currentValue: string) => string) => void;
  setDirectionalOffset: React.Dispatch<React.SetStateAction<number>>;
  lettersPressed: string;
  directionalOffset: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
  incorrectGuessedLetters: Array<string>;
  gameResult: string;
  setGameResult: React.Dispatch<React.SetStateAction<string>>;
  wordToGuess: string;
}

export const Keyboard = ({
  setLettersPressed,
  setDirectionalOffset,
  lettersPressed,
  directionalOffset,
  setCurrentRow,
  incorrectGuessedLetters,
  gameResult,
  setGameResult,
  wordToGuess,
}: KeyboardPropsType) => {
  const rowOneLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwoLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThreeLetters = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleLetterClick = (pressedLetter: string) => {
    setLettersPressed((currentValue) => {
      if (directionalOffset > 0) {
        const isEmpty = currentValue.length === 0;

        const highlightedPosition = isEmpty
          ? directionalOffset + 1
          : directionalOffset;

        for (let count = 1; count < highlightedPosition; count++) {
          currentValue += " ";
        }

        setDirectionalOffset(0);
        return currentValue + pressedLetter;
      } else if (directionalOffset < 0 || currentValue.length === 5) {
        let updatedWord = "";
        const highlightedIndex = directionalOffset + (currentValue.length - 1);

        for (let i = 0; i < currentValue.length; i++) {
          if (i === highlightedIndex) {
            updatedWord += pressedLetter;
          } else {
            updatedWord += currentValue[i];
          }
        }
        return updatedWord;
      } else if (currentValue.length < 5) {
        return currentValue + pressedLetter;
      }

      return currentValue;
    });
  };

  const handleEnterClick = () => {
    const isInvalidWord =
      validWords.includes(lettersPressed.toLowerCase()) === false;

    if (isInvalidWord) {
      toast("That is not a valid word!");
      return;
    }

    setCurrentRow((currentValue) => {
      if (currentValue < 6) {
        currentValue++;

        if (currentValue === 6) {
          const colourCodedGuessChars = generateColourCodedChars(
            wordToGuess,
            lettersPressed
          );

          const gameResult = validateGuess(colourCodedGuessChars);

          setGameResult(gameResult);
        }

        return currentValue;
      }

      return currentValue;
    });
  };

  const handleDeleteClick = () => {
    setLettersPressed((currentValue) => {
      const lastIndex = currentValue.length - 1;
      const updatedValue = currentValue.split("");

      if (directionalOffset === 0) {
        updatedValue[lastIndex] = "";
      } else {
        const highlightedIndex = directionalOffset + lastIndex;
        updatedValue[highlightedIndex] = " ";
      }
      return updatedValue.join("");
    });
  };

  const handleLeftArrowClick = () => {
    setDirectionalOffset((currentValue) => {
      let lettersLength = lettersPressed.length;
      const maximumOffset = 0 - (lettersLength - 1);

      if (currentValue > maximumOffset) {
        return --currentValue;
      }
      return currentValue;
    });
  };

  const handleRightArrowClick = () => {
    setDirectionalOffset((currentValue) => {
      let lettersLength = lettersPressed.length;
      if (currentValue < 5 - lettersLength) {
        return ++currentValue;
      }
      return currentValue;
    });
  };

  const renderKeyboardChars = (
    letter: string,
    index: number
  ): React.JSX.Element => {
    const isIncorrectLetter = incorrectGuessedLetters.includes(letter);

    return (
      <button
        disabled={gameResult !== ""}
        className={
          "keyboard-button-colour" + (isIncorrectLetter ? " grey" : "")
        }
        key={index}
        onClick={() => {
          handleLetterClick(letter);
        }}
      >
        {letter}
      </button>
    );
  };

  let canSubmit = lettersPressed.length === 5;

  if (lettersPressed.includes(" ")) {
    canSubmit = false;
  }

  return (
    <div id="keyboard-container">
      <div className="keyboard_flex-row">
        {rowOneLetters.map(renderKeyboardChars)}
      </div>
      <div className="keyboard_flex-row">
        {rowTwoLetters.map(renderKeyboardChars)}
      </div>
      <div className="keyboard_flex-row">
        {rowThreeLetters.map(renderKeyboardChars)}
      </div>
      <div className="keyboard_flex-row">
        <button
          disabled={canSubmit === false || gameResult !== ""}
          className={
            "action-keys" + (canSubmit ? " keyboard-button-colour" : " grey")
          }
          onClick={handleEnterClick}
        >
          ENTER
        </button>
        <button
          disabled={gameResult !== ""}
          className="arrow-keys keyboard-button-colour"
          onClick={handleLeftArrowClick}
        >
          &larr;
        </button>
        <button
          disabled={gameResult !== ""}
          className="arrow-keys keyboard-button-colour"
          onClick={handleRightArrowClick}
        >
          &rarr;
        </button>
        <button
          disabled={gameResult !== ""}
          className="action-keys keyboard-button-colour"
          onClick={handleDeleteClick}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};
