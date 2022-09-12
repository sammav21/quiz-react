import React from "react";

export default function Quiz(props){
    return(
        <div className="q-a">
            <label for="choices" className="questions">{props.question}</label>
            <select name="Question" className="choices" id="choices" multiple>
                <option value="1">These values will also be passed some sort of prop. </option>
                <option value="2">But will each answer choice receive a prop,</option>
                <option value="3">or only one option is needed in this select tag and then I map through each option?</option>
                <option value="4">Chances are I don't need to manually create a select tag for each question. One will probably be enough and then I will map through the data to create 4 instance of this component</option>
            </select>
        </div>
    )
}