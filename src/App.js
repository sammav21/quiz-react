import React from 'react';
import './App.css';
import Start from './Start';
import Quiz from './Quiz';

function App() {
  const [start, setStart] = React.useState(false)
  const [data, setData] = React.useState({
    question: "",
    wrongAnswer: "",
    answer: ""
  })

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4")
        .then(res => res.json())
        .then(data => setData(data.data))
}, [])



  const blobSize = {
    width: start ? "201px" : "297px",
    height: start ? "142px" : "235px"
  }

  function beginQuiz(){
    setStart(true)
  }

  function submitForm(event){
    event.preventDefault()
  }
  return (
    <div className="AppContainer">
      <img className='blueblob' style={blobSize} src={require('./assets/blue-blob.png')}></img>
      <img className='yellowblob' style={blobSize}src={require('./assets/yellow-blob.png')}></img>
      
      {!start 

      ?<Start begin={beginQuiz} />

      : 
      <form>
        <Quiz 
        question={data.question}
        wrongAnswer={data.wrongAnswer}
        answer={data.answer}
        />
        <button className="checkAnswers" onClick={submitForm} type='submit'>Check answers</button>
      </form>
      
      }
    
      
    </div>
  );
}

export default App;
