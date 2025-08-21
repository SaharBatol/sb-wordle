interface KeyboardPropsType {
  setLetterPressed: React.Dispatch<React.SetStateAction<string>>;
}

export const Keyboard = ({ setLetterPressed }: KeyboardPropsType) => {
  const rowOneLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwoLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThreeLetters = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleLetterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLetterPressed(e.currentTarget.innerText);
  };

  const handleEnter = () => {
    console.log("Enter");
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  const handleLeftArrow = () => {
    console.log("Left");
  };

  const handleRightArrow = () => {
    console.log("Right");
  };

  return (
    <div id="keyboard-container">
      <div className="keyboard_flex-row">
        {rowOneLetters.map((letter, index) => {
          return (
            <button key={index} onClick={handleLetterClick}>
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard_flex-row">
        {rowTwoLetters.map((letter, index) => {
          return (
            <button key={index} onClick={handleLetterClick}>
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard_flex-row">
        {rowThreeLetters.map((letter, index) => {
          return (
            <button key={index} onClick={handleLetterClick}>
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard_flex-row">
        <button className="action-keys" onClick={handleEnter}>
          ENTER
        </button>
        <button className="arrow-keys" onClick={handleLeftArrow}>
          &larr;
        </button>
        <button className="arrow-keys" onClick={handleRightArrow}>
          &rarr;
        </button>
        <button className="action-keys" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};
