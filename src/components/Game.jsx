import "../assets/game.css"
import Lives from "./Lives";
import Score from "./Score";
import EndScreen from "./EndScreen";
import Question from "./Question";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setLives } from "../features/livesSlice"

const Game = ({ triviaData }) => {

    const [gameStates, setGameStates] = useState({
        questions: triviaData,
        questionIndex: 0,
        isGameOver: false
    });
    const dispatch = useDispatch()
    const lives = useSelector((state) => state.lives.value)
    const { questions, questionIndex, isGameOver } = gameStates;

    console.log(lives);

    if (lives === 0 && isGameOver === false) {
        setGameStates({
            questions: 0,
            questionIndex: 0,
            isGameOver: true
        });
    }
    const restartGame = (() => {
        console.log("here");
        setGameStates({
            questions: triviaData,
            questionIndex: 0,
            isGameOver: false
        });
        dispatch(setLives(3))
    })
    useEffect(() => {
        console.log("finish fetching");

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
                : (<div><EndScreen onRetryClick={restartGame} /></div>//TODO: here will be the endScreen component
                )}
        </div>
    );
}

export default Game;