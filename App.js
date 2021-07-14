import React, { useState } from 'react';
import './style.css';

const App = () =>{

  let [score, setScore] = useState(0)

  return(
    <div>
      <h1> Hello World </h1>
      <h3> This value of score is {score} </h3>

      <button onClick={()=>{setScore(score+1)}}> Increment </button>
      <button onClick={()=>{score < 25? setScore(score+1):setScore(score)}}> Don't Increment after 25 </button>
      <button onClick={()=>{score > 0? setScore(score-1) :setScore(0)}}> Decrement </button>
      <button onClick={()=>{setScore(0)}}> Reset </button>
    </div>
  )
}

export default App;
