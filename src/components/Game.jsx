import Lives from "./Lives";
import Score from "./Score";
import "../assets/game.css"
import Question from "./Question";
import { useState, useEffect } from "react"

const Game = (data) => {
    const [gameStates, setgameStates] = useState({
        questions: data.triviaData,
        questionIndex: 0,
        isGameOver: false,
    });
    const { questions, questionIndex, isGameOver } = gameStates;

    useEffect(() => {
        console.log("finish fetching");
        // console.log(questions);
        // console.log(questions[questionIndex]);

    }, [])

    return (

        <div className="main-window">
            <div className="main-window-header">
                <h1>QUIZ APP</h1>
            </div>
            {!isGameOver ? (
                <div>
                    <div className="lives-and-score">
                        <div><Lives /></div>
                        <div><Score /></div>
                    </div>
                    <div><Question question={questions[questionIndex]} /></div>
                </div>)
                : (<div><p>end</p></div>//TODO: here will be the endScreen component
                )}


        </div>
    );
}

export default Game;