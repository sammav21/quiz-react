import { useState } from "react";
import { Question } from "../Exports"

export default function Quiz({data}){

    const [end, setEnd] = useState(false);
    const [score, setScore] = useState(0);
    const results = data.results;
    const handleSubmit = () => {

    }

    function endGame(){
        setEnd(true)
      }
  
    return(
        <form onSubmit={handleSubmit}>
            {results.map((result, i) => (
                <Question key={i} result={result} />
            ))}
        <button className="checkAnswers"  type='submit' onClick={() => endGame()}>
            {end ? "Play Again" : "Check Answers"}
        </button>
        {end && <h3>You scored {score} out of 4</h3>}
      </form>
    )
}