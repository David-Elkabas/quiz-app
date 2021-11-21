import "../assets/score.css"
import { useSelector } from 'react-redux'

const Score = () => {
    const score = useSelector((state) => state.score.value)
    return (

        <div className="score-place">
            <h3>score:{score}</h3>
        </div>
    );
}

export default Score;