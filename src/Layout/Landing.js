import React from "react";

export default function Start({setStart}){
    return(
        <div className="startPage flex column">
            <h1 className="startTitle">Quizzical</h1>
            <h4 className="startDetail"> Unlock Your Curiosity</h4>
            <button onClick={setStart} className="startButton">Start Quiz</button>
        </div>
    )
}