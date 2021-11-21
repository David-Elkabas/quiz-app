import "../assets/question.css"
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/lives/livesSlice'

const Question = () => {
    const dispatch = useDispatch()
    return (

        <div>
            <div className="question-image">
                <h1>image here</h1>
            </div>
            <div className="answer-section">
                <button className="btn correct" onClick={() => dispatch(increment())}>answer 1</button>
                <button className="btn wrong" onClick={() => dispatch(decrement())}>answer 2</button>
                <button className="btn">answer 3</button>
                <button className="btn">answer 4</button>
            </div>

        </div>
    );
}

export default Question;