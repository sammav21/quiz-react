import React from "react";


export default function Choices(props){

    const selectedStyle = {
        backgroundColor: props.selected ? "#D6DBF5" : "transparent"
    }


    function tallyScore(){
        props.changeSelectStatus()
        if(!props.clicked && props.correct){
            props.setScore(props.score+1)
        }
        
    }

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
