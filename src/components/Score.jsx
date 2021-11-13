import "../assets/score.css"

var currentScore = 200

const Score = () => {
    return (

        <div className="score-place">
            <h3>score:{currentScore}</h3>
        </div>
    );
}

export default Score;