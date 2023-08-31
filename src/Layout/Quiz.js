import { useState, useEffect } from "react";
import { Question } from "../Exports"

const triviaURL = 'https://opentdb.com/api.php?amount=4&type=multiple';
export default function Quiz({start}){

    const [data, setData] = useState([]);
    const [end, setEnd] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const getTriviaAPIData =  async () => {
        await fetch(triviaURL)
        .then((response) => response.json())
        .then((json) => setData(json.results))

    }
      useEffect(() => {
        getTriviaAPIData();
      }, [start]);

      let scoreArray = [];
      const addPoints = (singlePoint) =>{
        scoreArray.push(singlePoint);
        const sum = scoreArray.reduce((total, x)=> total+x);
        setTotalScore(sum);
      }

      function endGame(e){
        e.preventDefault();
        setEnd(true)
      }
      function restartGame(e){
        e.preventDefault();
        setEnd(false);
        getTriviaAPIData();
      }
    return(
        <form onSubmit={!end ? endGame : restartGame} className="flex column">
            {data.map((questionData, i) => (
                <Question key={i} questionData={questionData} start={start} end={end} addPoints={addPoints} />
            ))}
          <div className="formBottom flex">
        <button className="checkAnswers"  type='submit' >
            {end ? "Play Again" : "Check Answers"}
        </button>
        {end && <h3>You scored {totalScore} out of 4</h3>}
        </div>
      </form>
    )
}