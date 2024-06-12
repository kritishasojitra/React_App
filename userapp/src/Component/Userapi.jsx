

import React from 'react'
import './Userapi.css'

const Userapi = ({arr}) => {
  return (
    <div>

        <div className='api1'></div>
        {
            arr.map((el)=>{
                return (
                    <div className='api3 shadow-lg  mb-5 bg-body rounded'>
                        <img src={el.picture.large} className='mt-3'/>  
                        <h5 className='mt-3 fw-bold'>{el.name.first} {el.name.last}</h5>
                        <p><span className='fw-bold'>Email </span> : {el.email}</p>          
                        <p> <span className='fw-bold'>phone </span> : {el.phone}</p>          
                        <p> <span className='fw-bold'>Location </span> : {el.location.state} , {el.location. country}</p>          
                                
                    </div>
                )
            })
        }
    </div>
  )
}

export default Userapi