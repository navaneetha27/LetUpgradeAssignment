import logo from './logo.svg';
import './App.css';
import Button from "./Button.js"

function App() {
  return (
    <div className="App">
   <h1 style={{textAlign:'center',color:'red'}}>HELLO WORLD</h1>
   <h2 style={{color:"lightseagreen"}}>Hello CODERS</h2>
   <i>choose one of them:</i><br></br> <br></br>
  
   <Button  buttonText="Reactjs"/>
   <Button  buttonText="Angularjs"/>
   <Button  buttonText="Vuejs"/>
  
    </div>
  );
}

export default App;
