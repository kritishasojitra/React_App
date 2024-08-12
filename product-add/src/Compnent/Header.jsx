import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header-1">
    <nav className="navbar navbar-expand-lg bg-light shadow bg-body rounded">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#"><img src="download.png" width="35" height="35" alt=""/> <span className="">DNX</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link ms-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3" href="#">Mens</a>
        </li>
       <li className="nav-item">
          <a className="nav-link ms-3">Womens</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3">Kids</a>
        </li><li className="nav-item">
          <a className="nav-link ms-3">Beauty</a>
        </li><li className="nav-item">
          <a className="nav-link  ms-3">Studio</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    <div className="header-2">
      <div className="mt-5">
    <i class="bi bi-house-fill ms-3 fs-5"></i><NavLink to="/home" className="text-decoration-none  text-dark ms-2 fs-6">Home</NavLink><br/><br/>
    <i class="bi bi-ui-checks-grid ms-3 fs-5"></i><NavLink to="productform" className="text-decoration-none text-dark ms-2 fs-6">Product-From</NavLink><br/><br/>
    <i class="bi bi-file-spreadsheet-fill ms-3 fs-5"></i>    <NavLink to="product-add" className="text-decoration-none text-bold text-dark ms-2 fs-6">Product</NavLink>
        </div>
    </div>
    </>
  )
}

export default Header