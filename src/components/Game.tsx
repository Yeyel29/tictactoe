import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./Game.css";

function calculateWinner(squares: ("X" | "O" | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],           
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningLine: [a, b, c] };
    }
  }
  return null;
}

const Game: React.FC = () => {
  const [squares, setSquares] = useState<("X" | "O" | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const gameResult = calculateWinner(squares);
  const winner = gameResult?.winner;
  const winningSquares = gameResult?.winningLine || [];
  const isDraw = !winner && squares.every(square => square !== null);

  useEffect(() => {
  }, [winner]);

  let status;
  let statusClass = "status";
  
  if (winner) {
    status = `🎉 Player ${winner} Wins! 🎉`;
    statusClass = "status winner";
  } else if (isDraw) {
    status = "🤝 It's a Draw! 🤝";
    statusClass = "status draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
    statusClass = "status playing";
  }

  return (
    <div className="game">
      <div className={statusClass}>
        {status}
      </div>
      
      <Board 
        squares={squares} 
        onClick={handleClick} 
        winningSquares={winningSquares}
      />
      
      <div className="game-controls">
        <button 
          className="reset-button" 
          onClick={resetGame}
        >
          🔄 New Game
        </button>
      </div>
      
      {(winner || isDraw) && (
        <div className="game-over-modal">
          <div className="modal-content">
            <h2>{winner ? `Player ${winner} Wins!` : "It's a Draw!"}</h2>
            <p>{winner ? "Congratulations! 🎉" : "Good game! 🤝"}</p>
            <button className="play-again-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
