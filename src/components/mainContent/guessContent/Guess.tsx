interface GuessPropsType {
  lettersPressed: string;
  isCurrentGuess: boolean;
}

export const Guess = ({ lettersPressed, isCurrentGuess }: GuessPropsType) => {
  const letters = ["", "", "", "", ""];
  let currentInputIndex = 0;

  for (let i = 0; i < letters.length; i++) {
    const splitLettersPressed = lettersPressed.split("");

    if (splitLettersPressed[i] !== undefined) {
      letters[i] = splitLettersPressed[i];
    }

    if (letters[i] === "" && letters[i - 1] !== "") {
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
        let boxStyling = "guess-box ";

        if (currentInputIndex === i && isCurrentGuess) {
          boxStyling += "selected-box";
        }

        return (
          <div key={i} className={boxStyling}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};
