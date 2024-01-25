
import React, { useEffect, useMemo, useRef, useState, useCallback, useContext } from 'react';
import './App.css';
import FunctionComponentContext from './components/FunctionComponentContext';
import useLocalStorage from './customHooks/useLocalStorage';
import axios from 'axios';


function App() {
  useEffect(()=>{
    axios.get(`https://reqres.in/api/users?page=2`).then((res)=>{console.log(res)})
  })
  
  return (
    <h1>Axios Tutorial</h1>
  );
}

export default App;
