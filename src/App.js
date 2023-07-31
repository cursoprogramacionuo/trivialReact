import './App.css';
import { useState } from 'react';

let App = () => {
  let [points, setPoints] = useState(0)
  let [questions, setQuestions] = useState([
    {
      text: "¿Cual es la capital de España",
      options: ["Madrid","Paris","Berlin"],
      anwser: 0
    },
    {
      text: "¿Cual es la capital de Alemania",
      options: ["Madrid","Paris","Berlin"],
      anwser: 2
    },
    {
      text: "¿Cuanto es 1+1?",
      options: ["1","2","3"],
      anwser: 1
    }
  ])

  return (
    <div className="App">
      <h1>Trivial</h1>
    </div>
  );
}

export default App;
