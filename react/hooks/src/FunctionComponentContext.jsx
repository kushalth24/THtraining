import React, { useContext } from 'react'
import { ThemeContext } from './App';
const FunctionComponentContext = () => {
    const dark=useContext(ThemeContext);
    const themeStyles={
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black',
        padding:'2rem',
        margin:'2rem'
    }
  return (
    <div style={themeStyles}>
      Function theme
    </div>
  )
}

export default FunctionComponentContext
