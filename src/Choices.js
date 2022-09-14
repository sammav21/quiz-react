import React from "react";


export default function Choices(props){

    const selectedStyle = {
        backgroundColor: props.selected ? "#D6DBF5" : "transparent"
    }


    function tallyScore(){
        props.changeSelectStatus()
        if (props.correct){
            props.setScore(props.score+1)
            console.log(props.score)
            // this is counting score, but a choice can be clicked infite times. Selected can be switched on an off, but find way to limit click count so that even if it's clicked multiple times it only registers one point
    }}

return(
    <label htmlFor={props.answer} key={props.id} className='answerChoices' style={selectedStyle} onClick={tallyScore} >
    <input 
        type="radio"         
        id={props.id} 
        name={props.question}
        value={props.answer}
        >
    </input>
    {props.answer}
</label>
)
}
