import { useState, useEffect } from "react";
import Game from "./Game";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

function QuizPage() {
    const [quizFetch, setQuizFetch] = useState({
        isLoading: true,
        errorMessage: "",
        data: null,
    });

    // Empty array for dependencies means the effect only runs on mount.
    useEffect(() => {
        async function getQuiz() {
            try {
                console.log("Fetching data from url");
                const url = "http://localhost:3000/results";
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Something went wrong, server responded with ${response.status}.`);
                }

                const data = await response.json();

                // Successfully passed all the errors checks!
                setQuizFetch({
                    isLoading: false,
                    errorMessage: "",
                    data: data,
                });
            } catch (err) {
                // Display a generic error message.
                setQuizFetch({
                    isLoading: false,
                    errorMessage: "Something went wrong loading the quiz. Please try again later.",
                    data: null,
                });
                // Display specific error for debugging in the console.
                console.error(err);
            }
        }
        getQuiz();

        // TODO: in the future, we should cleanup if the user leaves the page before fetch
        // finishes running.
    }, []);

    const { isLoading, errorMessage, data } = quizFetch;

    let contents;
    if (isLoading) contents = <LoadingSpinner />;
    else if (errorMessage !== "") contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
    else contents = <Game triviaData={data} />;

    return (
        <main>{contents}</main>
    )
}

export default QuizPage;