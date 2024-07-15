import React from 'react'
import "../Css/Footer.css"

const Footer = () => {
  return (
    <>
    <div className="main-footer">
        <div className="footer1">
            <h1>Shome</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
            <i class="fa-solid fa-f"></i>
            <i class="fa-solid fa-p"></i>
            <i class="fa-solid fa-basketball"></i>

        </div>
        <div className="footer2">
            <h4>Services</h4>
            <p className='mt-5'>Home monitoring</p>
            <p>Air Filters</p>
            <p>Professional installation</p>
            <p>Smart Buildings</p>
            <p>For contractors</p>
        </div>
        <div className="footer2">
            <h4>My Account</h4>
            <p className='mt-5'>My Account</p>
            <p>Contact</p>
            <p>Shopping cart</p>
            <p>Shop</p>
            <p>Services Login</p>
        </div>
        <div className="footer1">
            <h4 className="mt-2">Contact Info</h4>
            <p className='mt-5'>Address: Your address goes here.
                Phone//fax: 0123456789
                Email: demo@example.com
                www.example.com</p>
        </div>
    </div>
    
    </>
  )
}

export default Footer