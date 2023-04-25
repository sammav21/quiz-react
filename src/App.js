import React from 'react';
import './App.css';
import Start from './Start';
import Question from './Question';
import axios from 'axios';
import {nanoid} from 'nanoid'
import Choices from './Choices';

const triviaURL = 'https://opentdb.com/api.php?amount=4&type=multiple';


function App() {
  
  const [data, setData] = React.useState([])
  const [start, setStart] = React.useState(false)
  const [end, setEnd] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [clicked, setClicked] = React.useState(false)
  

  React.useEffect(() => {
    getTriviaAPIData();
  }, []);
  
  const getTriviaAPIData = async () => {
    const response = await axios.get(triviaURL)
    setData(response.data)
  }

  const questionComponent = data.results?.map(results => {
    return(
    <Question
      id={nanoid()}
      question={results.question}
      answer={results.correct_answer}
      wrong={results.incorrect_answers}
      score={score}
      setScore={setScore}
      end={end}
      setEnd={setEnd}
      clicked={clicked}
      setClicked={setClicked}
      /*hope to add this as a check down the line */
    /> )})
  
    function beginQuiz(){
      setStart(true)
    }

    function endGame(){
      setEnd(true)
    }

    

const blobSize = {
  width: start ? "201px" : "297px",
  height: start ? "142px" : "235px"
}
  return (
    <div className="AppContainer">
      <img className='blueblob' style={blobSize} src={require('./assets/blue-blob.png')}></img>
      <img className='yellowblob' style={blobSize}src={require('./assets/yellow-blob.png')}></img>
      
      {start 
      ?<div className='form'>
        {questionComponent}
        <button className="checkAnswers"  type='submit' onClick={() => endGame()}>{end ? "Play Again" : "Check Answers"}</button>
        {end && <h3>You scored {score} out of 4</h3>}
      </div>
      : <Start begin={beginQuiz} />
      }
    
      
    </div>
  );
}

export default App;
