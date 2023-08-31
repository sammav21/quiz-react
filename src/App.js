import React from 'react';
import './App.css';
import { useState } from 'react';
import {Landing, Quiz} from './Exports';



function App() {

  const [start, setStart] = useState(false);
  const startGame = (e) => {
    e.preventDefault();
    setStart(true);
  }

  return (
    <div className='w-100 h-100 App flex column'>
      <img className='blueblob' style={{width: start ? "201px" : "297px", height: start ? "142px" : "235px"}} src={require('./assets/blue-blob.png')} alt='blue blob'></img>
      <img className='yellowblob' style={{width: start ? "201px" : "297px", height: start ? "142px" : "235px"}} src={require('./assets/yellow-blob.png')} alt='yellow blob'></img>
      {start 
      ?<Quiz start={start} setStart={startGame}/>
      : <Landing setStart={startGame} />
      }
    </div>
  );
}

export default App;
