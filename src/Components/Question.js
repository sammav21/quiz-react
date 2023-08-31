import { useEffect, useState } from 'react';
import {ArrayShuffler, Decoder, Option} from '../Exports';

export default function Question({questionData, end, addPoints}){
    
    const [shuffledOptions, setShuffledOptions] = useState([]);
    
    useEffect(() => {
        const options = Array.from(questionData.incorrect_answers);
        options.push(questionData.correct_answer);
        setShuffledOptions(ArrayShuffler(options));
      }, [questionData]);
   
    const [chosenAnswer, setChosenAnswer] = useState(null);

    let selfScore = 0;
    if(chosenAnswer === questionData.correct_answer){
            selfScore = 1
            
    } else{
            selfScore = 0
    }
    console.log(questionData.correct_answer)
    useEffect(() => {
        addPoints(selfScore);
    }, [end])
    return(
        <div className="q-a flex column ">
            <p className="questions">{Decoder(questionData.question)}</p> 
            <div className='answerContainer flex'>
                {shuffledOptions.map((answer, i) => (
                    <Option key={i} answer={answer} correctAnswer={questionData.correct_answer} end={end}setChosenAnswer={setChosenAnswer} chosenAnswer={chosenAnswer}/>
                ))}
            </div>
        </div>
    )
}

