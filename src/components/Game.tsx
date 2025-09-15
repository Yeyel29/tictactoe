import React, { useState } from "react";
import Board from "./Board";

function calculateWinner(squares: ("X" | "O" | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Game: React.FC = () => {
  const [squares, setSquares] = useState<( "X" | "O" | null )[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div>{status}</div>
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Game;
