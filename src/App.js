import React from 'react';
import './App.css';
import Start from './Start';
import Question from './Question';
import axios from 'axios';
import {nanoid} from 'nanoid'

const triviaURL = 'https://opentdb.com/api.php?amount=4&type=multiple';


function App() {
  
  const [data, setData] = React.useState([])
  const [start, setStart] = React.useState(false)

  function beginQuiz(){
    setStart(true)
  }
  
  React.useEffect(() => {
    getTriviaAPIData();
  }, []);
  
  const getTriviaAPIData = async () => {
    const response = await axios.get(triviaURL)
    setData(response.data)
  }


  const blobSize = {
    width: start ? "201px" : "297px",
    height: start ? "142px" : "235px"
  }



  function submitForm(event){
    event.preventDefault()
  }



  const resultsArray = data.results?.map(results => {
    const mixAnswers = [...results.incorrect_answers, results.correct_answer] 
  
    return(
    <Question
      key={results.question}
      question={results.question}
      answer={results.correct_answer}
      wrong={results.incorrect_answers}
      allAnswers={mixAnswers}
    /> )}   
    
)
console.log(data)
  return (
    <div className="AppContainer">
      <img className='blueblob' style={blobSize} src={require('./assets/blue-blob.png')}></img>
      <img className='yellowblob' style={blobSize}src={require('./assets/yellow-blob.png')}></img>
      
      {!start 

      ?<Start begin={beginQuiz} />

      : 
      <div className='form'>
        {resultsArray}
        <button className="checkAnswers" onClick={submitForm} type='submit'>Check answers</button>
      </div>
      
      }
    
      
    </div>
  );
}

export default App;
