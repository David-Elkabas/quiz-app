import "../assets/question.css"
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/livesSlice'
import { incrementScore } from '../features/scoreSlice'
import { useState, useEffect } from "react"
// import * as FontAwesome from 'react-icons/lib/fa'
// import axios from 'axios';

const Question = (data) => {
    const dispatch = useDispatch()
    const [options, setOptions] = useState({
        question: data.question.question,
        optionA: data.question.incorrect_answers[0],
        optionB: data.question.incorrect_answers[1],
        optionC: data.question.incorrect_answers[2],
        optionD: data.question.correct_answer,
    });
    const { question, optionA, optionB, optionC, optionD } = options;

    useEffect(() => {
        console.log(question);

    }, [])

    // const handleShuffle = (options) => {
    //     return options.sort(() => Math.random() - 0.5);
    // };

    return (
        <div>
            <div className="question-image">
                <p>{question}</p>
                {/* <i className="FontAwesome.fa-university" aria-hidden="true"></i> */}
            </div>

            <div className="answer-section">
                <button className="btn correct" onClick={() => { dispatch(increment()); dispatch(incrementScore()) }}>{optionA}</button>
                <button className="btn wrong" onClick={() => dispatch(decrement())}>{optionB}</button>
                <button className="btn">{optionC}</button>
                <button className="btn" onClick={() => dispatch(incrementScore())}>{optionD}</button>
            </div>

        </div>
    );
}

export default Question;