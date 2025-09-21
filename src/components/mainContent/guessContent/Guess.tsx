interface GuessPropsType {
  lettersPressed: string;
  isCurrentGuess: boolean;
  directionalOffset: number;
  colourCodedGuessChars: Array<string>;
}

export const Guess = ({
  lettersPressed,
  isCurrentGuess,
  directionalOffset,
  colourCodedGuessChars,
}: GuessPropsType) => {
  const letters = ["", "", "", "", ""];
  let currentInputIndex = 0;

  for (let i = 0; i < letters.length; i++) {
    const splitLettersPressed = lettersPressed.split("");

    if (splitLettersPressed[i] !== undefined) {
      letters[i] = splitLettersPressed[i];
    }

    const isCurrElemNotEmpty = letters[i] !== "";
    const isNextElemEmpty = letters[i + 1] === "";

    if (isCurrElemNotEmpty && isNextElemEmpty) {
      currentInputIndex = i;
    }
  }

  const isFull = !letters.includes("");

  if (isFull) {
    currentInputIndex = 4;
  }

  return (
    <div className="guess-box-container">
      {letters.map((letter, i) => {
        let boxStylingClass = "guess-box ";

        if (colourCodedGuessChars.length === 5) {
          boxStylingClass += colourCodedGuessChars[i];
        }

        const updatedHighlightedPosition =
          currentInputIndex + directionalOffset;

        const isCurrentInputPosition = updatedHighlightedPosition === i;

        if (isCurrentInputPosition && isCurrentGuess) {
          boxStylingClass += "selected-box";
        }

        return (
          <div key={i} className={boxStylingClass}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};
