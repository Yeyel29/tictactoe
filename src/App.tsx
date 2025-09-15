import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState<( "X" | "O" | null )[]>(Array(9).fill(null));

  function handleClick(i: number) {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  }

  return <Board squares={squares} onClick={handleClick} />;
}

export default App;
