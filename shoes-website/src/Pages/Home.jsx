import React from 'react'
import "../Css/Home.css"
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Home = () => {
  return (
    <>
    <div className="main-slider">
      <img src="img/1.webp"/>
      <div className="slider1">
        <h1>EXCLUSIVE<br/> NEW SHOES</h1>
        <p>UP NTO 30% OFF ALL SHOES & PRODUCT</p> 
        <button className='btn'>Shop Now</button>
      </div>
    <div className="slider2">
      <div className="small-slider">
        <img src="img/2.webp" alt="Animated Image" />
        <div className="small-slider1">
       <img src="img/s2.jpg" className="animate__animated animate__fadeInRight"/>
        </div>
      </div>
    </div>
    </div>

    <div className="poster">
      <div className="poster-box">
        <img src="img/1 (1).webp"/>
        <h1>Sports Shoes</h1>
        <p>From $95.00</p>
      </div>
      <div className="poster-box">
        <img src="img/2 (1).webp"/>
        <h1>Latest Shoes</h1>
        <p>From $90.00</p>
      </div>
      <div className="poster-box">
        <img src="img/3 (1).webp"/>
        <h1>Office Shoes</h1>
        <p>From $82.00</p>
      </div>
    </div>


    <div className="banner-container">
      <div className="banner-content">
        <h1 >Saving 50%</h1>
        <h2>All Online Store</h2>
        <p>Offer Available All Shoes & Products</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <div className="banner-image">
        <div className="img-ban">
        <img src="img/bg1.webp" alt="Shoes" />
        </div>
      </div>
    </div>


    <div className="post-con">
      <div className="post-small">
        <img src="img/2 (3).webp"/>
      </div>
      <div className="post-small">
          <div className='post1'>
            <img src="img/1 (3).webp"/>
          </div>
          <div className='post2'>
            <h1>Sports Shoes</h1>
            <p>UP TO 30% OFF ALL SHOES & PRODUCTS</p>
            <button className="shop-now-btn1">Shop Now</button>
          </div>
      </div>
    </div>

    <div className="main-blog">
      <div className="blog1">
        <h1 className="text-center fs-1 fw-bold mt-3">Latest Blog</h1>
        <p className="text-center fs-5 mt-2 text-secondary">There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div className="blog2">
        <div className="blog3">
        <Card>
      <Card.Img variant="top" src="img/1 (4).webp" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text style={{fontSize:"25px", fontWeight:"bold"}}>
        Lorem ipsum dolor ametcons adipisicing elit sed
        </Card.Text>
        <Button variant="dark" className='btn1'>Read More</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="blog3">
        <Card>
      <Card.Img variant="top" src="img/2 (4).webp" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text style={{fontSize:"25px", fontWeight:"bold"}}>
        Celebrity Daughter Opens About Upto Having Her Eye
        </Card.Text>
        <Button variant="dark" className='btn1'>Read More</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="blog3">
        <Card>
      <Card.Img variant="top" src="img/3 (3).webp" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text style={{fontSize:"25px", fontWeight:"bold"}}>
        Romantic Love Stories Of Hollywood Popular
        </Card.Text>
        <Button variant="dark" className='btn1'>Read More</Button>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home