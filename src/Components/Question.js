import {Option} from '../Exports';
export default function Question({result}){
 
    // const [choices, setChoices] = React.useState(allChoices())
    //Generate copy with following values for every mutliple choice option
    // function eachChoice(answer){
    //     return{
    //         id: nanoid(),
    //         answer: answer,
    //         selected: false,
    //         correct: false,
    //         clicked: false
    //     }
    // }

    // function allChoices(){
    //     const Choices = []
    //     Choices.push(eachChoice(props.answer))
    //     Choices[0].correct = true;
    //     Choices.push(eachChoice(props.wrong[0]))
    //     Choices.push(eachChoice(props.wrong[1]))
    //     Choices.push(eachChoice(props.wrong[2]))
    //     return (
    //     //shuffle code found on stackOverflow by superluminary
    //         Choices.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
    //     )
    // }



    // function changeSelectStatus(id){
    //     setChoices(prevChoices => {
    //         return prevChoices.map((choice) => {
    //             return choice.id === id ? {...choice,selected: true, clicked: true} : {...choice,selected: false}
    //         })
           
    //     }) 
    // }


// const choicesPresented = choices.map(choice => {
//     return(
//         <Choices
//             key={choice.id}
//             answer={choice.answer}
//             selected={choice.selected}
//             correct={choice.correct}
//             clicked={choice.clicked}
//             changeSelectStatus={() => changeSelectStatus(choice.id)}
//             question={props.question}
//             score={props.score}
//             setScore={props.setScore}
//             end={props.end}
//             />
//     )
// }
    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) { 
            var j = Math.floor(Math.random() * (i + 1));           
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }    
        return array;
    }
    const options = Array.from(result.incorrect_answers);
    options.push(result.correct_answer);
    const shuffledOptions = shuffleArray(options);
    
    return(
        <div className="q-a">
            <p className="questions">{result.question}</p> 
            <div className='answerContainer'>
                {shuffledOptions.map((answer, i) => (
                    <Option key={i} answer={answer} correct={result.correct_answer}/>
                ))}
            </div>
        </div>
    )
}

