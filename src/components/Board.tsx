import React from "react";
import Square from "./Square";
import "./Board.css";

type BoardProps = {
  squares: ("X" | "O" | null)[];
  onClick: (i: number) => void;
  winningSquares?: number[];
};

const Board: React.FC<BoardProps> = ({ squares, onClick, winningSquares = [] }) => {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square 
          key={i} 
          value={value} 
          onClick={() => onClick(i)}
          isWinning={winningSquares.includes(i)}
        />
      ))}
    </div>
  );
};

export default Board;
