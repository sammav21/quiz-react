import React from 'react';
import {nanoid} from 'nanoid'

export default function Question(props){

    const allAnswers = props.allAnswers

    //shuffle code foudn on stackOverflow by superluminary
    let shuffle = allAnswers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    const shuffledAnswers = shuffle.map(test => (
    <button className='answerChoices'>{test}</button>
        ))
    
    return(
        <div className="q-a">
            <p className="questions">{props.question}</p> 
            <div className='answerContainer'>{shuffledAnswers}</div>
        </div>
    )
}

