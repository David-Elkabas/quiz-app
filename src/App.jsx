import "./assets/app.css"
import MainWindow from "./components/MainWindow";
import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("quiz");

  return (
    <div className="app">
      {gameState === "menu" && <MainWindow />}
      {gameState === "quiz" && <MainWindow />}
      {gameState === "endScreen" && <MainWindow />}



    </div>
  );
}

export default App;
