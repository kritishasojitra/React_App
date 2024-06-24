

import React, { useState } from 'react'
import "./Form.css"



let initial={
  email: "",
  pass:""
}

function Form ()  {

  const [state,setState] = useState(initial)
    const [arr,setarr] = useState([])
    const [isValid,setIsvalid] = useState(true)


   const handleChange = (e)=>{
      let {name,value} = e.target
      setState({...state,[name] : value})
   }

   const handleSubmit = (e)=>{
      e.preventDefault()
     setarr([...arr,state])
     setState(initial)
   }

   const handleBlur = ()=>{
      if(state.password.length > 6){
         setIsvalid(true)
      }else{
         setIsvalid(false)
      }
   }

  return (
    <>
       
   <div className="form1">    
  <div id="form-ui">
    <form  id="form" onSubmit={handleSubmit}>
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Spotify</div>
          <div id="welcome-line-2">Welcome Back, Loyd</div>
        </div>
        <div id="input-area">
          <div class="form-inp">
            <input value={state.email} name='email' placeholder="Email Address" type="text" onChange={handleChange}/>
          </div>
          <div class="form-inp">
            <input value={state.password} required name='password'  placeholder="Password" type="password" className={isValid ? "a" : "b"} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          {isValid ? "" :<p style={{color:"white"}}>*Enter must be 6 characters</p>}
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button" type="submit">Login</button>
        </div>
        <div id="forgot-pass">
          <a href="#">Forgot password?</a>
        </div>
        <div id="bar"></div>
      </div>
    </form>
    </div>
    </div>
  

    </>
  );   
  
}

export default Form