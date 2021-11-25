import { useDispatch, useSelector } from 'react-redux'
import { setLives } from "../features/livesSlice"

const EndScreen = ({ onRetryClick }) => {
    const dispatch = useDispatch()

    const score = useSelector((state) => state.score.value);
    const bestScore = 0; // TODO: change to real Data 

    return (
        <div className="end-screen">
            <h1>Game Over</h1>
            <h3>you ran out of lives</h3>

            <p>your score: {score} </p>
            <p>Best Score: {bestScore}</p>
            <button onClick={onRetryClick}>Retry?</button>
        </div>
    );
}

export default EndScreen;