interface KeyboardPropsType {
  setLettersPressed: React.Dispatch<React.SetStateAction<string>>;
  setButtonPressed: React.Dispatch<React.SetStateAction<string>>;
}

export const Keyboard = ({
  setLettersPressed,
  setButtonPressed,
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
    setButtonPressed("Delete");
  };

  const handleLeftArrowClick = () => {
    console.log("Left");
  };

  const handleRightArrowClick = () => {
    console.log("Right");
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
