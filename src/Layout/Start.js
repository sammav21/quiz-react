import React from "react";

export default function Start(props){
    return(
        <div className="startPage">
            <h1 className="startTitle">Quizzical</h1>
            <h4 className="startDetail">Lorem ipsum text</h4>
            <button onClick={props.begin} className="startButton">Start Quiz</button>
        </div>
    )
}