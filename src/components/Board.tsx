import React from "react";
import Square from "./Square";

type BoardProps = {
  squares: ("X" | "O" | null)[];
  onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)" }}>
      {squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
