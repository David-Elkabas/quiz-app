import "../assets/question.css"
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/livesSlice'
import { incrementScore } from '../features/scoreSlice'
import { useState, useEffect } from "react"
// import axios from 'axios';

const Question = (questions, setQuestions) => {
    const dispatch = useDispatch()

    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);


    useEffect(() => {
        // setOptions(
        //     questions &&
        //     handleShuffle([
        //         questions[currentQuestion]?.correct_answer,
        //         ...questions[currentQuestion]?.incorrect_answer,
        //     ])
        // );
    }, [])

    // console.log(options);

    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    };

    return (
        <div>
            <div className="question-image">
                <h1>image here</h1>
            </div>

            <div className="answer-section">
                <button className="btn correct" onClick={() => { dispatch(increment()); dispatch(incrementScore()) }}>answer 1</button>
                <button className="btn wrong" onClick={() => dispatch(decrement())}>answer 2</button>
                <button className="btn">answer 3</button>
                <button className="btn" onClick={() => dispatch(incrementScore())}>answer 4</button>
            </div>
                
            }
        </div>
    );
}

export default Question;