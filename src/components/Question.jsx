import "../assets/question.css"
import { useDispatch } from 'react-redux'
import { decrementOneLive } from '../features/livesSlice'
import { incrementScore } from '../features/scoreSlice'
import { useState, useEffect } from "react"
// import * as FontAwesome from 'react-icons/lib/fa'
// import axios from 'axios';

const Question = ({ oneQuestion, loadNextQuestion }) => {

    const shuffleOptions = ((array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const swapIndex = Math.floor(Math.random() * (i + 1));
            const temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[swapIndex];
            shuffledArray[swapIndex] = temp;
        }
        return shuffledArray;
    });

    const onAnswerClick = ((answer) => {
        //checking if the answer is correct or incorrect 
        if (answer === oneQuestion.correct_answer) {
            // className="btn correct"
            dispatch(incrementScore())
        } else {
            // className="btn wrong"
            dispatch(decrementOneLive())
        }
        // wait 2 sec 
        loadNextQuestion()
    })

    const dispatch = useDispatch()
    const [options, setOptions] = useState({
        question: oneQuestion.question,
        optionsArray: [oneQuestion.correct_answer, ...oneQuestion.incorrect_answers]

    });
    const { question, optionsArray } = options;
    console.log(oneQuestion.correct_answer);

    const shuffledAnswers = shuffleOptions(optionsArray);
    // console.log(optionsArray);
    // console.log(shuffledAnswers); // TODO: Eliav - need to check this is happening twice every render 

    useEffect(() => {
        setOptions({
            question: oneQuestion.question,
            optionsArray: [oneQuestion.correct_answer, ...oneQuestion.incorrect_answers]
        })

    }, [oneQuestion])


    return (
        <div>
            <div className="question-image">
                <p>{question}</p>
                {/* <i className="FontAwesome.fa-university" aria-hidden="true"></i> */}
            </div>

            <div className="answer-section">
                <button className="btn" onClick={() => onAnswerClick(shuffledAnswers[3])}
                >{shuffledAnswers[3]}</button>
                <button className="btn" onClick={() => onAnswerClick(shuffledAnswers[2])}
                >{shuffledAnswers[2]}</button>
                <button className="btn" onClick={() => onAnswerClick(shuffledAnswers[1])}
                >{shuffledAnswers[1]}</button>
                <button className="btn" onClick={() => onAnswerClick(shuffledAnswers[0])}
                >{shuffledAnswers[0]}</button>
            </div>

        </div>
    );
}

export default Question;