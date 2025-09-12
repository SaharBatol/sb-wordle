interface KeyboardPropsType {
  setLettersPressed: React.Dispatch<React.SetStateAction<string>>;
  setDirectionalOffset: React.Dispatch<React.SetStateAction<number>>;
  lettersPressed: string;
}

export const Keyboard = ({
  setLettersPressed,
  setDirectionalOffset,
  lettersPressed,
}: KeyboardPropsType) => {
  const rowOneLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwoLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThreeLetters = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleLetterClick = (letter: string) => {
    setLettersPressed((currentValue) => {
      if (currentValue.length < 5) {
        return currentValue + letter;
      }

      return currentValue;
    });
  };

  const handleEnterClick = () => {
    console.log("Enter");
  };

  const handleDeleteClick = () => {
    setLettersPressed((currentValue) => {
      // the character you are on should be replaced with an empty string when you press delete -- High level overview

      // do offset -4 to get index of current character (-4 hard coded) :D
      // get the current character we are on using the index from above
      // replace current character with empty string

      // no other characters should change

      const indexToIgnore = currentValue.length - 1;
      const newValue = currentValue.slice(0, indexToIgnore);
      return newValue;
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
