import "../assets/question.css"
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/livesSlice'
import { incrementScore } from '../features/scoreSlice'
import { useState, useEffect } from "react"
// import axios from 'axios';

const Question = (data) => {
    const dispatch = useDispatch()
    const [options, setOptions] = useState({
        optionA: data.question.incorrect_answers[0],
        optionB: data.question.incorrect_answers[1],
        optionC: data.question.incorrect_answers[2],
        optionD: data.question.correct_answer,
    });
    const { optionA, optionB, optionC, optionD } = options;

    useEffect(() => {
        console.log(options);

    }, [])

    // const handleShuffle = (options) => {
    //     return options.sort(() => Math.random() - 0.5);
    // };

    return (
        <div>
            <div className="question-image">
                <h1>image here</h1>
            </div>

            <div className="answer-section">
                <button className="btn correct" onClick={() => { dispatch(increment()); dispatch(incrementScore()) }}>{optionA}</button>
                <button className="btn wrong" onClick={() => dispatch(decrement())}>{optionB}</button>
                <button className="btn">{optionC}</button>
                <button className="btn" onClick={() => dispatch(incrementScore())}>{optionD}</button>
            </div>
                
            }
        </div>
    );
}

export default Question;