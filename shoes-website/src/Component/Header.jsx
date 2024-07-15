import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import "../Css/Header.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
    <div className="main-header">
      <div className="header1">
        <div className='logo'>
          <img src="https://htmldemo.net/shome/shome/assets/img/logo.webp"/>
        </div>
        <div className='searchbox'>
        <InputGroup className="mb-3 w-75" style={{height:"45px"}}>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text  id="basic-addon2" style={{backgroundColor:" #EB3E32", color:"white"}}><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
      </InputGroup>

        </div>
        <div className='iconbox'>
        {/* <i class="fa-regular fa-heart"></i> */}
        <Link to="/Singup"  className=" text-decoration-none text-dark fw-bold sing">Singup</Link>
        <Link to="/Login"  className=" text-decoration-none text-dark fw-bold sing">Login</Link>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div className="header2">
        <div className="nav-bar">
    <NavLink to="/" ActiveClassName="active" className="text-light text-decoration-none">Home</NavLink>
    <NavLink to="/About" ActiveClassName="active" className="text-light text-decoration-none">About</NavLink>
   
            

            
    <NavLink to="/Product" ActiveClassName="active" className="text-light text-decoration-none">Products</NavLink>
    <NavLink to="/Blog" ActiveClassName="active" className="text-light text-decoration-none">Blog</NavLink>
    <NavLink to="/Contact" ActiveClassName="active" className="text-light text-decoration-none">Contact</NavLink>
    </div>
    </div>
    </div>
    </>
  )
}

export default Header