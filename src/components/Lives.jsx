import "../assets/lives.css"
import { useSelector } from 'react-redux'




const Lives = () => {
    const lives = useSelector((state) => state.lives.value)
    return (
        <div className="lives-place">
            <h3>lives: {lives}</h3>
        </div>
    );
}

export default Lives;