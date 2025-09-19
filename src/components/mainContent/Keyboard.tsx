interface KeyboardPropsType {
  setLettersPressed: React.Dispatch<React.SetStateAction<string>>;
  setDirectionalOffset: React.Dispatch<React.SetStateAction<number>>;
  lettersPressed: string;
  directionalOffset: number;
}

export const Keyboard = ({
  setLettersPressed,
  setDirectionalOffset,
  lettersPressed,
  directionalOffset,
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
    console.log("Enter");
  };

  const handleDeleteClick = () => {
    setLettersPressed((currentValue) => {
      const indexOfCurrChar = lettersPressed.length - 1;

      const updatedValue = currentValue.split("");

      updatedValue[indexOfCurrChar] = " ";
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

  return (
    <div id="keyboard-container">
      <div className="keyboard_flex-row">
        {rowOneLetters.map((letter, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleLetterClick(letter);
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard_flex-row">
        {rowTwoLetters.map((letter, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleLetterClick(letter);
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard_flex-row">
        {rowThreeLetters.map((letter, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleLetterClick(letter);
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard_flex-row">
        <button className="action-keys" onClick={handleEnterClick}>
          ENTER
        </button>
        <button className="arrow-keys" onClick={handleLeftArrowClick}>
          &larr;
        </button>
        <button className="arrow-keys" onClick={handleRightArrowClick}>
          &rarr;
        </button>
        <button className="action-keys" onClick={handleDeleteClick}>
          DELETE
        </button>
      </div>
    </div>
  );
};
