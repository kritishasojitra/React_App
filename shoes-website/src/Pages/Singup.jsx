import React, { useState } from 'react'
import "../Css/Singup.css"
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2'


const Singup = () => {

  const [state,setState]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=((e)=>{
    let {name,value} = e.target;

    setState({...state,[name]:value})
  })

  const navigate=useNavigate()
  const handlesubmit=((e)=>{
    e.preventDefault()

    fetch(`http://localhost:8080/user`,
      {

        method:"POST",
        headers:{
          'content-type':"appliction/json"
        },
        body:JSON.stringify(state)
    })
    .then((res)=>{
      res.json()
    })
    .then((res)=>{
      navigate("/Login")
    })
  })



  return (
    <>
  <div className="main-page">
    <img src="img/bg3.webp"/>
    <h1>SINGUP</h1>
  </div>
  <div className='singup-form'>
    <div className="heading    border-bottom border-secondry">
        <h1 className="text-center fw-bold mt-4 ">Singup</h1>
    </div>
    <div className="from">
    <Form onSubmit={handlesubmit}>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='mt-5'>Username *</Form.Label>
        <Form.Control type="text" name="name" placeholder="" style={{height:"60px"}} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='mt-3'>Email address*</Form.Label>
        <Form.Control type="email" name="email" style={{height:"60px"}} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className="mt-3">Password*</Form.Label>
        <Form.Control type="password"  name="password" style={{height:"60px"}}onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <input type="submit" className="btn mt-5 bg-dark w-100 text-light fw-bold" style={{height:"60px"}}/>
      </Form.Group>
    </Form>
    </div>
  </div>
    </>
  )
}

export default Singup