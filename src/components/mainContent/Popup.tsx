interface PopupPropsType {
  handlePlayAgain: () => void;
  handlePopupClose: () => void;
  message: string;
}

const Popup = ({
  handlePlayAgain,
  handlePopupClose,
  message,
}: PopupPropsType) => {
  return (
    <div id="popup-container">
      <div id="popup-box">
        <h2>{message}</h2>
        <div className="button-container">
          <button onClick={handlePlayAgain}>Play Again?</button>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
