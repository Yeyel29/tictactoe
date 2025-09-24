import React from "react";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">Tic Tac Toe</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
