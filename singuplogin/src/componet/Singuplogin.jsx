import { useState } from "react";
import "./form.css"
import Swal from 'sweetalert2'




function Singuplogin(){

  const [state,setState] =useState("logind")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginemail,setLoginEmail] = useState("")
  const [loginpass,setLoginPassword] = useState("")
  const [arr,setArr] = useState([])

  const handleClick=()=>{
    let obj={
      username:name,
      email:email,
      pass:password,
    }
      setArr([...arr,obj])
  }


  const handleLogin=()=>{
    let data=arr.filter((el)=>el.email == loginemail && el.pass == loginpass)
    console.log(data);

    if(data.length>0)
      {
        Swal.fire("Login Successfull")
      }
      else{
        Swal.fire(
            'Oops...',
            'Login unSuccessfull',
            'error'
          )
    }
  }


    return(
      <div>
        {
          state == "login" ?<div>
             <div className="form1">
        <div className="heading">
            <h3 className="fw-bold text-center">login</h3>
        </div>

<div class=" form2 row g-3 p-3 shadow-lg p-3 mb-5 bg-body rounded">
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" onChange={(el)=>setLoginEmail(el.target.value)}/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" onChange={(el)=>setLoginPassword(el.target.value)}/>
  </div>
  <div class="col-12">
    <button class="btn mt-3" onClick={handleLogin}>Login</button>
  </div>
  <p className="text-center mt-4" onClick={()=>setState("singup")}>New Account SingUp</p>
</div>
        </div> 
          </div>
          
          :
          
          <div className="form1">
        <div className="heading">
            <h3 className="fw-bold text-center">SingUp</h3>
        </div>

<div class="form2 row g-3 p-3 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="col-md-12">
    <label for="inputEmail4" class="form-label">User Name</label>
    <input type="text" class="form-control" id="inputEmail4" onChange={(el)=>setName(el.target.value)}/>
  </div>
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" onChange={(el)=>setEmail(el.target.value)}/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" onChange={(el)=>setPassword(el.target.value)}/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn mt-3" onClick={handleClick}>Sign in</button>
  </div>
  <p className="text-center mt-4" onClick={()=>setState("login")}>Already have a account? login now</p>
</div>
        </div> 
        }
      </div>
    )
}
export default Singuplogin;