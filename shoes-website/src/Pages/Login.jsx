import React from 'react'
import { useState } from 'react';
import  "../Css/Singup.css"
import Form from 'react-bootstrap/Form';
import { Navigate,useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'

const obj = {

  email: "",
  password: ""
}

const Login = () => {

  let [state, setstate] = useState(obj)
  const Navigate=useNavigate()

  const handlechange = (e) => {



      setstate({ ...state, [e.target.name]: e.target.value })

  }


  const handelclick = (e) => {


    e.preventDefault()

    if (state.email) {


        fetch(`http://localhost:8080/user?email=${state.email}`)
            .then((res) => res.json())
            .then((res) => {

                if (res[0].password == state.password) {


                  swal.fire("Loging Successfully.....");
                    localStorage.setItem("islogin", true)
                    Navigate("/Product")

                }
                else {

                    alert("wrong password")
                }


            })
            .catch((err) => {
                console.log(err);
            })
    }
}

  


  return (
    <>
    <div className="main-page">
    <img src="img/bg3.webp"/>
    <h1>LOGIN</h1>
  </div>
  <div className='singup-form'>
    <div className="heading    border-bottom border-secondry">
        <h1 className="text-center fw-bold mt-4 ">Login</h1>
    </div>
    <div className="from">
    <Form onSubmit={handelclick}>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='mt-5'> email address*</Form.Label>
        <Form.Control type="email" name="email" placeholder="" style={{height:"60px"}} onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className="mt-3">Password* </Form.Label>
        <Form.Control type="password" name="password"  style={{height:"60px"}}  onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <button className="btn mt-5 bg-dark w-100 text-light fw-bold" style={{height:"60px"}}>Login</button>
      </Form.Group>
      
    </Form>
    </div>
  </div>
    </>
  )
}

export default Login