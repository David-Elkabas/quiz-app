import { useSelector } from 'react-redux'

const EndScreen = () => {

    const score = useSelector((state) => state.score.value);

    const bestScore = 0; // TODO: change to real Data

    return (
        <div className="end-screen">
            <h1>Game Over</h1>
            <h3>you ran out of lives</h3>

            <p>your score: {score} </p>
            <p>Best Score: {bestScore}</p>
            <button className="end-screen__button">Retry?</button>
        </div>
    );
}

export default EndScreen;