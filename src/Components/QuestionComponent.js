import { useState } from "react";

let QuestionComponent = (props) => {
    let { questions, setPoints, points } = props;
    let [numberOfQuestion, setNumberOfQuestion] = useState(0)
    let [message,setMessage] = useState(null)

    let anwserQuestion = (anwser) => {
        if (anwser == questions[numberOfQuestion].anwser){
            // points
            setMessage("Right anwser")
            setPoints(points+1)
            // msg
        } else {
            setMessage("Wrong anwser")
            // msg
        }

        if (numberOfQuestion < questions.length-1 ){
            setNumberOfQuestion(numberOfQuestion+1)
            setTimeout( () => {
                setMessage(null)
            }, 2000)
        } else {
            // msg 
            setTimeout(() => {
                setMessage("Finish")
            } ,2000)
            setTimeout(() => {
                setPoints(0)
                setNumberOfQuestion(0)
            } ,4000)
        }
    }

    return (
        <div className="question">
            { message != null && 
                <h2>{ message }</h2>
            }
            <div>
                <h2>Question</h2>
                <p id="questionText"> { questions[numberOfQuestion].text } </p>
                <ul class="options">
                    { questions[numberOfQuestion].options.map( (option, i) => 
                        <li><button onClick={ () => { anwserQuestion(i) }}> {option} </button></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default QuestionComponent;
