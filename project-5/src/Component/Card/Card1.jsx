

import React from 'react'
import "./Card.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'bootstrap';

const Card1 = () => {
  return (
    <>
    <div className="main-card">
        <div className="card1">
            <img src="img/feature1-min.jpg"/>
        </div>
        <div className="card1">
            <img src="img/feature2-min.jpg"/>
        </div>
    </div>

    <div className="card-haeding">
        <div className="card2 border-secondary  border-opacity-25">
            <div className="heading1">
                <h3 className="mt-4 fw-bold">New Arrivals</h3>
            </div>
            <div className="a-tag">
                <button className="btn fs-5 mt-4 fw-bold text-secondary ms-5">On Sell</button>
                <button className="btn fs-5 mt-4 fw-bold text-secondary ms-2">Hot Sell</button>
                <button className="btn fs-5 mt-4 fw-bold text-secondary ms-2">Trend</button>
                <button className="btn fs-5 mt-4 fw-bold text-secondary ms-2">Best Sell</button>
            </div>
        </div>
        <div className="card3">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top mt-2  ms-4" src="img/1-min-1-253x200-1.png"  style={{width:"190px"}}/>
      <Card.Body >
        <Card.Title className='fw-bold text-secondary fs-6 mt-3 text-center'>Innovative Furnitures</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='fw-bold text-center'>Heavy Duty Antis</ListGroup.Item>
        <ListGroup.Item className='text-center'>$4,000.00</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className='btn btn-success' style={{marginLeft:"70px"}}>Add To Cart</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top mt-2 w-50 ms-5 " src="img/red_color_chair-1-300x300.png" />
      <Card.Body >
        <Card.Title className='fw-bold text-secondary fs-6 mt-3 text-center'>Innovative Furnitures</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='fw-bold text-center'>Zinglo Wheel</ListGroup.Item>
        <ListGroup.Item className='text-center'>$3,000.00</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className='btn btn-success' style={{marginLeft:"70px"}}>Add To Cart</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top mt-2 w-50 ms-5" src="img/4-min.png" />
      <Card.Body >
        <Card.Title className='fw-bold text-secondary fs-6 mt-3 text-center'>Innovative Furnitures</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='fw-bold text-center'>Zinglo Wheel</ListGroup.Item>
        <ListGroup.Item className='text-center'>$5,000.00</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className='btn btn-success' style={{marginLeft:"70px"}}>Add To Cart</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top mt-2 w-75 ms-4" src="img/Untitled-3-1 (1).jpg" />
      <Card.Body >
        <Card.Title className='fw-bold text-secondary fs-6 mt-3 text-center'>Innovative Furnitures</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='fw-bold text-center'>Heavy Duty Anti</ListGroup.Item>
        <ListGroup.Item className='text-center'>$2,000.00</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className='btn btn-success' style={{marginLeft:"70px"}}>Add To Cart</Card.Link>
      </Card.Body>
    </Card>
        </div>
    </div>


    <div className="card4">
      <div className="card-icon shadow-sm bg-body rounded">
        <div className="c1">
        <i class="fa-solid fa-car"></i>
        </div>
        <div className="c1">
        <h6>Free Delivery</h6>
        <p>from $78</p>
        </div>
      </div>
      <div className="card-icon  shadow-sm  bg-body rounded">
        <div className="c1">
      <i class="fa-solid fa-users"></i>
      </div>
      <div className="c1">
        <h6>99% Customer</h6>
        <p>feedbacks</p>
      </div>
      </div>
      <div className="card-icon  shadow-sm  bg-body rounded">
        <div className="c1">
      <i class="fa-solid fa-arrow-rotate-right"></i>
      </div>
      <div className="c1">
        <h6>10 Days</h6>
        <p>for free return</p>
      </div>
      </div>
      <div className="card-icon  shadow-sm  bg-body rounded">
        <div className="c1">
        <i class="fa-solid fa-cash-register"></i>
        </div>
        <div className="c1">
          <h6>Payment</h6>
          <p>secure system</p>
        </div>
      </div>
      <div className="card-icon  shadow-sm  bg-body rounded">
        <div className="c1">
      <i class="fa-solid fa-headphones"></i>
      </div>
      <div className="c1">
        <h6>24/7</h6>
        <p>online supports</p>
      </div>
      </div>
    </div>

    <div className="card5">
      <div className="card6">
        <img src="img/hb.jpg"></img>
      </div>
      <div className="cd1">
        <img src="img/off.png" className="i1"/>
        <img src="img/chair-min.png"/>
      </div>
      <div className="cd2">
        <h2 className='text-light  fw-bold'>Join now & earn 5% rewards on every order.</h2>
        <h6 className='mt-4 text-light '>$340.00 <span className='sp'>$460.00</span></h6>
        <button className='btn3'>BUY NOW</button>
        <button className=' btn4'>VIEW COLLECTIONS</button>
      </div>
    </div>
    </>
  )
}

export default Card1