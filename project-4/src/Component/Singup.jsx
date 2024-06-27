import React, { useState } from 'react';
import "./Singup.css"
import Swal from 'sweetalert2'

const Signup = () => {
  
  const [conre, setConre] = useState("logind");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginemail, setLoginEmail] = useState("");
  const [loginpass, setLoginPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [arr, setArr] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      username: name,
      email: email,
      pass: password,
    }
    setArr([...arr, obj]);
    Swal.fire("Signup Successful....");
  }

  const handleBlur = () => {
    if (password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const handleLogin = () => {
    let data = arr.filter((el) => el.email === loginemail && el.pass === loginpass);
    console.log(data);

    if (data.length > 0) {
      Swal.fire("Login Successful");
    } else {
      Swal.fire(
        'Oops...',
        'Login Unsuccessful',
        'error'
      );
    }
  }

  return (
    <>
      <div className="form1">
        {conre === "login" ?
          <div className="signup-container">
            <div className="form-content">
              <h2>Login</h2>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required style={{ marginLeft: "40px" }} onChange={(el) => setLoginEmail(el.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="pass" required style={{ marginLeft: "10px" }} className={isValid ? "a" : "b"} onChange={(el) => setLoginPassword(el.target.value)}  onBlur={handleBlur}  />
                </div>
                {isValid ? "" : <p style={{ color: "blue" }}>*Password must be at least 8 characters</p>}
                <button type="submit" className="submit-btn" onClick={handleLogin}>Login</button>
              </div>
              <p className="signin-link" onClick={() => setConre("signup")}>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
            <div className="illustration">
              <img src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740838.png" alt="Illustration" />
            </div>
          </div>
          :
          <div className="signup-container">
            <div className="form-content">
              <h2>Sign Up</h2>
              <form> 
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" id="name" name="name" required style={{ marginLeft: "40px" }} onChange={(el) => setName(el.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email"  name="email"  style={{ marginLeft: "40px" }} onChange={(el) => setEmail(el.target.value)} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="pass" required style={{ marginLeft: "10px" }} className={isValid ? "a" : "b"} onChange={(el) => setPassword(el.target.value)} onBlur={handleBlur} />
                </div>
                {isValid ? "" : <p style={{ color: "blue" }}>*Password must be at least 8 characters</p>}
                <button type="submit" className="submit-btn" onClick={handleClick}>Sign Up</button>
              </form>
              <p className="signin-link" onClick={() => setConre("login")}>Already have an account? <a href="#">Log In</a></p>
            </div>
            <div className="illustration">
              <img src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740838.png" alt="Illustration" />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Signup;
