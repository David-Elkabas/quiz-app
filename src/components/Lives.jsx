import "../assets/lives.css"

var currentLive = 3

const Lives = () => {
    return (
        <div className="lives-place">
            <h3>lives: {currentLive}</h3>
        </div>
    );
}

export default Lives;