import React from "react";
import "./Square.css";

type SquareProps = {
  value: "X" | "O" | null;
  onClick: () => void;
  isWinning?: boolean;
};

const Square: React.FC<SquareProps> = ({ value, onClick, isWinning = false }) => {
  return (
    <button
      className={`square ${value ? 'filled' : ''} ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      disabled={!!value}
    >
      {value && (
        <span className={`symbol ${value.toLowerCase()}`}>
          {value}
        </span>
      )}
    </button>
  );
};

export default Square;
