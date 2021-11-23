import "./assets/app.css"
import MainWindow from "./components/Game";
import React, { useState } from "react";
import QuizPage from "./components/QuizPage";

function App() {
  const [gameState, setGameState] = useState("quiz");

  return (
    <div className="app">
      {gameState === "menu" && <MainWindow />}
      {gameState === "quiz" && <QuizPage />}
      {gameState === "endScreen" && <MainWindow />}



    </div>
  );
}

export default App;
