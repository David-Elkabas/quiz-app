import "../assets/game.css"
import Lives from "./Lives";
import Score from "./Score";
import EndScreen from "./EndScreen";
import Question from "./Question";
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'

const Game = (data) => {
    const [gameStates, setGameStates] = useState({
        questions: data.triviaData,
        questionIndex: 0,
        isGameOver: false
    });

    const lives = useSelector((state) => state.lives.value)

    if (lives === 0) {
        setGameStates({
            questions: 0,
            questionIndex: 0,
            isGameOver: true
        });
    }

    const { questions, questionIndex, isGameOver } = gameStates;

    // let pageContent;
    // if (!isGameOver){
    //     pageContent = ( <div>
    //     <div className="lives-and-score">
    //         <div><Lives /></div>
    //         <div><Score /></div>
    //     </div>
    //     <div><Question question={questions[questionIndex]} /></div>
    // </div> )
    // } else{
    //     pageContent = <div><EndScreen /></div>//TODO: here will be the endScreen component
    // }

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
                : (<div><EndScreen /></div>//TODO: here will be the endScreen component
                )}


        </div>
    );
}

export default Game;