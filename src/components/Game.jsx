import Lives from "./Lives";
import Score from "./Score";
import "../assets/game.css"
import Question from "./Question";
import { useState, useEffect } from "react"
import axios from 'axios';

const MainWindow = () => {
    const [question, setQuestion] = useState();

    useEffect(() => {
        console.log("finish fetching");
        // const fetchQuestions = async () => {
        //     const response = await axios.get('http://localhost:3000/results');
        //     setQuestion(response.data);
        // };
        // fetchQuestions()
    }, [])

    return (

        <div className="main-window">
            <div className="main-window-header">
                <h1>QUIZ APP</h1>
            </div>
            <div className="lives-and-score">
                <div><Lives /></div>
                <div><Score /></div>
            </div>
            <div><Question question={question}
                setQuestion={setQuestion} /></div>
        </div>
    );
}

export default MainWindow;