import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {Start, Quiz} from './Exports';
import {nanoid} from 'nanoid'
import Choices from './Components/Option';

const triviaURL = 'https://opentdb.com/api.php?amount=4&type=multiple';


function App() {

  const [start, setStart] = useState(false);
  const [data, setData] = useState([]);
  
  
  const getTriviaAPIData =  () => {
    const response =  fetch(triviaURL)
    .then((response) => response.json())
    .then((data) => setData(data))
  }

  // const questionComponent = data.results?.map(results => {
  //   return(
  //   <Question
  //     id={nanoid()}
  //     question={results.question}
  //     answer={results.correct_answer}
  //     wrong={results.incorrect_answers}
  //     score={score}
  //     setScore={setScore}
  //     end={end}
  //     setEnd={setEnd}
  //     clicked={clicked}
  //     setClicked={setClicked}
  //     /*hope to add this as a check down the line */
  //   /> )})
   
    

  useEffect(() => {
    getTriviaAPIData();
  }, []);
  return (
    <div className="AppContainer">
      <img className='blueblob' style={{width: start ? "201px" : "297px", height: start ? "142px" : "235px"}} src={require('./assets/blue-blob.png')} alt='blue blob'></img>
      <img className='yellowblob' style={{width: start ? "201px" : "297px", height: start ? "142px" : "235px"}} src={require('./assets/yellow-blob.png')} alt='yellow blob'></img>
      {start 
      ?<Quiz data={data}/>
      : <Start begin={() => setStart(true)} />
      }
    
      
    </div>
  );
}

export default App;
