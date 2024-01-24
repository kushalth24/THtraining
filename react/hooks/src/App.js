
import { useMemo, useState } from 'react';
import './App.css';

function slowFunction(num){
  for(let i=0;i<1000000000;i++){}
  return num*2;
}

function App() {
  const [number, setNumber]=useState(0);
  const [dark, setDark]=useState(false);
  const doubleNumber=useMemo(()=>{
    return slowFunction(number);
  },[number]);
  const themeStyles={
    backgroundColor:dark ? 'black':'white',
    color:dark ? 'white':'black'
  }
  return (
    <div className="App">
      <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
      <h3>It will take longer time to double the number but not for changing theme. the page is rerendering everytime we change theme or double the number. but useMemo avoids the lengthy doubleNumber() function while changing theme</h3>
    </div>
  );
}

export default App;
