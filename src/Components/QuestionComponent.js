import { useState } from "react";

let QuestionComponent = (props) => {
    let { questions, setPoints, points } = props;
    let [numberOfQuestion, setNumberOfQuestion] = useState(0)


    let anwserQuestion = (anwser) => {
        if (anwser == questions[numberOfQuestion].anwser){
            // points
            setPoints(points+1)
            // msg
        } else {
            // msg
        }

        if (numberOfQuestion < questions.length-1 ){
            setNumberOfQuestion(numberOfQuestion+1)
        } else {
            // msg 
            setTimeout(() => {
                setPoints(0)
                setNumberOfQuestion(0)
            } ,4000)
        }
    }

    return (
        <div className="question">
            <div>
                <h2>Question</h2>
                <p id="questionText"> { questions[numberOfQuestion].text } </p>
                <ul class="options">
                    <li><button onClick={ () => { anwserQuestion(0) }}> {questions[numberOfQuestion].options[0]} </button></li>
                    <li><button onClick={ () => { anwserQuestion(1) }}> {questions[numberOfQuestion].options[1]} </button></li>
                    <li><button onClick={ () => { anwserQuestion(2) }}> {questions[numberOfQuestion].options[2]} </button></li>
                </ul>
            </div>
        </div>
    )
}

export default QuestionComponent;
