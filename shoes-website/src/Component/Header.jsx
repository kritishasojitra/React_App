import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import "../Css/Header.css"


const Header = () => {
  return (
    <>
    <div className="main-header">
      <div className="header1">
        <div className='logo'>
          <img src="https://htmldemo.net/shome/shome/assets/img/logo.webp"/>
        </div>
        <div className='searchbox'>
        <marquee behavior="scroll" direction="left">
        <h6> Limited Time Offer: Get <span className="text-danger">50% off</span> on all shoes!   Limited Time Offer: Get <span className="text-danger">50% off</span> on all shoes!   Limited Time Offer: Get <span className="text-danger">50% off</span> on all shoes!    Limited Time Offer: Get <span className="text-danger">50% off</span> on all shoes!</h6>
      </marquee>
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