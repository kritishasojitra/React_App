

import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer1">
        <div className='footer2'>
            <p className="fs-4 ms-3">Got Question? Call us 24/7</p>
            <h4 className='ms-3'>[80] 1017 197           </h4>
            <p className='ms-3 mt-3'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            <button className="btn5">View On Map</button>
        </div>
        <div className='footer2'>
            <p className="fs-4 ms-3">We Using</p>
            <h3 className='ms-3'>Safe Payments</h3>
            <p className='ms-3 mt-5'>Secured by:</p>
        </div>
        <div className='footer2'>
            <h5 className=" ms-3 fw-bold mt-2">Quick Links</h5>
            <p className="ms-3 mt-2">Support Center<br/>
Term & Conditions<br/>
Shipping<br/>
Privacy Policy<br/>
Help<br/>
Products Return<br/>
FAQS</p>
        </div>
        <div className='footer2'>
            <h5 className=" ms-3 fw-bold mt-2">Our Stores </h5>
            <p className="ms-3 mt-2">New York<br/>
London SF<br/>
Cockfosters BP<br/>
Los Angeles<br/>
Chicago<br/>
Las Vegas<br/>
Albarto</p>
        </div>
    </div>
    <div className='footer3'>
        <h5 className=" text-light fw-bold">Allow payment base on</h5>
    </div>
    </>
  )
}

export default Footer