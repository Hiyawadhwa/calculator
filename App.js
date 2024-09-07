import React,{useState} from 'react';
import './App.css';
function App(){
  const [val,setValue]=useState("");
  
  const clr=()=>{
    setValue(" ");
  }
  
   
    return (
      <>
        <h1><b><center>CALCULATOR</center></b></h1>
        <div className='cont'>
         <input type='text' value={val}></input><br></br>
         <div className='bx'>
          <button value="0" onClick={e=>setValue(val+e.target.value)}>0</button>
          <button value="1" onClick={e=>setValue(val+e.target.value)}>1</button>
          <button value="2" onClick={e=>setValue(val+e.target.value)}>2</button>
          <button value="3" onClick={e=>setValue(val+e.target.value)}>3</button><br></br>
          <button value="4" onClick={e=>setValue(val+e.target.value)}>4</button>
          <button value="5" onClick={e=>setValue(val+e.target.value)}>5</button>
          <button value="6" onClick={e=>setValue(val+e.target.value)}>6</button>
          <button value="7" onClick={e=>setValue(val+e.target.value)}>7</button><br></br>
          <button value="8" onClick={e=>setValue(val+e.target.value)}>8</button>
          <button value="9" onClick={e=>setValue(val+e.target.value)}>9</button>
          <button value="+" onClick={e=>setValue(val+e.target.value)}>+</button>
          <button value="-" onClick={e=>setValue(val+e.target.value)}>-</button><br></br>
          <button value="/" onClick={e=>setValue(val+e.target.value)}>/</button>
          <button value="*" onClick={e=>setValue(val+e.target.value)}>*</button>
          <button value="." onClick={e=>setValue(val+e.target.value)}>.</button>
          <button onClick={e=>setValue(eval(val))}>=</button>
          <button onClick={clr}>clear</button>
          
  
         </div>
        </div>
       {/* <Alert altr="DEMO"/> */}
      {/* <Darkmode/> */}
      </>
     
     );
    }
  export default App;
  