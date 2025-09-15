import React from "react";

type SquareProps = {
  value: "X" | "O" | null;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        margin: "5px",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
