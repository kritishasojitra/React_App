

import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  return (
    <>
    <div className="hed1 shadow bg-body ">
      <div className="nav1">
        <img src="img/logo (1).png"/>
        <InputGroup className="" style={{width:"500px", height:"50px"}}>
        <Form.Control
          placeholder="Find your product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
    <div className='icon1'>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    </div>
      </div>
      <div className="nav2">
        <div className="all">
        <i class="fa-solid fa-bars-staggered"></i>
        <NavDropdown title="All Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home Decoration</NavDropdown.Item><hr/>
              <NavDropdown.Item href="#action/3.2">
                Kitchenware
              </NavDropdown.Item><hr/>
              <NavDropdown.Item href="#action/3.3">Smart Chair</NavDropdown.Item>
              <NavDropdown.Item /><hr/>
              <NavDropdown.Item href="#action/3.4">
                Furniture
              </NavDropdown.Item>
            </NavDropdown>
        
        </div>
      <Navbar bg="light" data-bs-theme="light" className='w-50'>
        <Container>
          <Nav className="nav-a ms-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#page" className="ms-5">Page</Nav.Link>
            <Nav.Link href="#shop" className="ms-5">Shop</Nav.Link>
            <Nav.Link href="#blog" className="ms-5">Blog</Nav.Link>
            <Nav.Link href="#gallery" className="ms-5">Gallery</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='off'>
        <h5 className="fw-bold  text-center mt-3">BLACK FRIDAY</h5>
        <p className="text-center text-secondary fw-bold">Get 45% off!</p>
      </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Header