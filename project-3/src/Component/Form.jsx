

import React, { useRef } from 'react'
import "./Form.css"
import Hight from './Hight';

function Form() {

  const inputref=useRef("")

    console.log(inputref);


  const handleclick =()=>{
    inputref.current.focus();
  } 

  return (
    <>

    <div className="form1">
      <h1>Input Focus</h1><br/>
        <input type="text" placeholder="Enter your name" ref={inputref} />
        <button onClick={handleclick}>Click me</button><br/><br/><br/><br/><hr/><hr/>
    </div><br/>

      <Hight/>
    </>
  )
}

export default Form