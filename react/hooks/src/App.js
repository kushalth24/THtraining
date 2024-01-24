
import React, { useEffect, useMemo, useRef, useState, useCallback, useContext } from 'react';
import './App.css';
import FunctionComponentContext from './FunctionComponentContext';

export const ThemeContext=React.createContext();

function App() {
  const [darkTheme,setDarkTheme]=useState(true);
  function toggleTheme(){
    setDarkTheme(prevDarkTheme=> !prevDarkTheme)
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponentContext/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
