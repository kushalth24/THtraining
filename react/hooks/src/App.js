
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';


function App() {
  const[name, setName]=useState("");
  // const renderCount=useRef(1);
  // useEffect(()=>{
  //   renderCount.current=renderCount.current+1;
  // })
  //-----------------------------------------
  // const inputRef=useRef();
  // function focus(){
  //   inputRef.current.focus();
  // }
  //-------------------------------------------abc
  const prevName=useRef();
  useEffect(()=>{
    prevName.current=name;
  },[name])
  return (
    <div className="App">
      {/* <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/> */}
      <input value={name} onChange={e=>setName(e.target.value)}/>
      {/* <div>My name is {name}</div> */}
      {/* <div> I rendered {renderCount.current} times </div> */}
      {/* <button onClick={focus}>Focus</button> */}
      <div>My name is {name} and it used to be {prevName.current}</div>
    </div>
  );
}

export default App;
