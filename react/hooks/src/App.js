
import React, { useEffect, useMemo, useRef, useState, useCallback, useContext } from 'react';
import './App.css';
import FunctionComponentContext from './components/FunctionComponentContext';
import useLocalStorage from './customHooks/useLocalStorage';

export const ThemeContext=React.createContext();

function App() {
  const[name, setName]=useLocalStorage('name',"");
  return (
    <input
    type='text'
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    />
  );
}

export default App;
