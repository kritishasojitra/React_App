

import React, { useRef } from 'react'

const Hight = () => {

    const highlight=useRef("")

    const handleclick=()=>{
        highlight.current.select();
    }


  return (
    <>
    <h1>Highlight Text</h1><br/>
   <textarea ref={highlight} placeholder="Type some text here"></textarea><br/><br/>
    <button onClick={handleclick}>select Text</button>


    </>
  )
}

export default Hight

