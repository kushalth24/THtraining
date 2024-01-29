import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch=useDispatch();
    const {c}=useSelector(state=>state.custom)
    const addBtn=()=>{
        dispatch({type: "increment", payload: 2});
    }
    const subBtn=()=>{
        dispatch({type: "decrement", payload: 1});
    }
  return (
    <div>
      <h2>Home Component: {c}</h2>
      <button onClick={()=>addBtn()}>Increment</button>
      <button onClick={()=>subBtn()}>Decrement</button>
    </div>
  )
}

export default Home
