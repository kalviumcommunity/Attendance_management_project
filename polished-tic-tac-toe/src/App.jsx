import React, { useState } from "react";
import GameBoard from "./GameBoard";

function App() {
  const [key, setKey] = useState(0);

  const handleRestart = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <GameBoard key={key} />
      <button className="restart-btn" onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
