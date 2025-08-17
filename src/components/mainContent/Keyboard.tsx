export const Keyboard = () => {
  return (
    <div id="keyboard-container">
      <div className="keyboard_flex-row">
        <button>Q</button>
        <button>W</button>
        <button>E</button>
        <button>R</button>
        <button>T</button>
        <button>Y</button>
        <button>U</button>
        <button>I</button>
        <button>O</button>
        <button>P</button>
      </div>
      <div className="keyboard_flex-row">
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
      </div>
      <div className="keyboard_flex-row">
        <button>Z</button>
        <button>X</button>
        <button>C</button>
        <button>V</button>
        <button>B</button>
        <button>N</button>
        <button>M</button>
      </div>
      <div className="keyboard_flex-row">
        <button className="action-keys">ENTER</button>
        <button className="arrow-keys">&larr;</button>
        <button className="arrow-keys">&rarr;</button>
        <button className="action-keys">DELETE</button>
      </div>
    </div>
  );
};
