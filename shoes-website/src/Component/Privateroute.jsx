import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
  
  
    let login = localStorage.getItem("islogin") ;
    console.log(login)

    
  return (
    
  //  <div></div>
   login ? children : <Navigate to ="/Login"></Navigate>
    
  )
}

export default Privateroute