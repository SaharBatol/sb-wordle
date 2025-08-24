interface GuessPropsType {
  lettersPressed: string;
}

export const Guess = ({ lettersPressed }: GuessPropsType) => {
  const letters = ["", "", "", "", ""];

  for (let i = 0; i < letters.length; i++) {
    const splitLettersPressed = lettersPressed.split("");

    letters[i] = splitLettersPressed[i];
  }

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
