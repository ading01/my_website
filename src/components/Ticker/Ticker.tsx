import React from "react";
import "./Ticker.css"; // Assuming your CSS is in a separate file

type TickerProps = {
  repeatText: string;
};

const Ticker: React.FC<TickerProps> = ({ repeatText }) => {
  // Create a long string by repeating the text
  const repeatedText = Array(50).fill(repeatText).join("");

  return (
    <div className="ticker-container">
      <div className="ticker-text">{repeatedText}</div>
    </div>
  );
};

export default Ticker;
