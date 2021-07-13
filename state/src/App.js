import React,{useState} from 'react';
import "./style.css";

const App=() =>{
    let [score,setScore]=useState(0)

    return(
        <div>
        <h1 style={{color:"blue",textAlign:"center"}}>Hello This is my counter application</h1>
        <h3>The value of score is <span className="score">{score}</span></h3>
        <button onClick={()=>(score<25)?setScore(score+1):""}>increment</button>
        <button onClick={()=>{score>0?setScore(score-1):setScore(0)}}>decrement</button>
        <button onClick={()=>{setScore(0)}}>reset</button>
        </div>
    );
}
export default App;

