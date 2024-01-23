import React from 'react'

const Counter = ({dispatch, counter}) => {

  return (
    <div>
      <button onClick={()=>dispatch({
        type: 'increment',
      })}>+</button>
      {counter}
      <button onClick={()=>dispatch({
        type: 'decrement',
      })}>-</button>
    </div>
  )
}

export default Counter
