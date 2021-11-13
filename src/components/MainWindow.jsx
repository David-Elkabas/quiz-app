import Lives from "./Lives";
import Score from "./Score";
import "../assets/mainWindow.css"
import Question from "./Question";

const MainWindow = () => {
    return (

        <div className="main-window">
            <div className="main-window-header">
                <h1>QUIZ APP</h1>
            </div>
            <div className="lives-and-score">
                <div><Lives /></div>
                <div><Score /></div>
            </div>
            <div><Question /></div>
        </div>
    );
}

export default MainWindow;