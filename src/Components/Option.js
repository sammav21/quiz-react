import React from "react";
import { Decoder } from "../Exports";

export default function Option({answer, correctAnswer, end, setChosenAnswer, chosenAnswer}){
    const handleChosenAnswer = (e) => {
        e.preventDefault();
       setChosenAnswer(answer);
    }
    const styles = () => {
        if(!end){
            if(chosenAnswer === answer){
                return 'selected'
            } 
        } else if(end){
             if(chosenAnswer === answer && chosenAnswer === correctAnswer){
                return 'correct'
            } else if(chosenAnswer === answer && chosenAnswer !== correctAnswer) {
                return 'wrong'
            } else if (answer === correctAnswer){
                return 'missed'
            }
        }
          
        
}
// {chosenAnswer === answer ? 'selected answerChoices flex':'answerChoices flex'}
return(
    <button onClick={handleChosenAnswer} className={`answerChoices flex ${styles()}`}>{Decoder(answer)}</button>
    
)
}
