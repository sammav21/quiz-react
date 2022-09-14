import React from 'react';
import Choices from './Choices';
import {nanoid} from 'nanoid'

export default function Question(props){
    const [choices, setChoices] = React.useState(allChoices())

    //Generate copy with following values for every mutliple choice option
    function eachChoice(answer){
        return{
            id: nanoid(),
            answer: answer,
            selected: false,
            correct: false,
        }
    }

    function allChoices(){
        const Choices = []
        Choices.push(eachChoice(props.answer))
        Choices[0].correct = true;
        Choices.push(eachChoice(props.wrong[0]))
        Choices.push(eachChoice(props.wrong[1]))
        Choices.push(eachChoice(props.wrong[2]))
        return (
        //shuffle code found on stackOverflow by superluminary
            Choices.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
        )
    }

    function changeSelectStatus(id){
        setChoices(prevChoices => {
            return prevChoices.map((choice) => {
                return choice.id === id ? {...choice,selected: true} : {...choice,selected: false}
            })
        })
    }



const choicesPresented = choices.map(choice => {
    return(
        <Choices
            key={choice.id}
            answer={choice.answer}
            selected={choice.selected}
            correct={choice.correct}
            changeSelectStatus={() => changeSelectStatus(choice.id)}
            question={props.question}
            score={props.score}
            setScore={props.setScore}
            end={props.end}
            />
    )
})
       
    return(
        <div className="q-a">
            <p className="questions">{props.question}</p> 
            <div className='answerContainer'>{choicesPresented}
            </div>
        </div>
    )
}

