
import React from 'react'
import "./Slider.css"

const Slider = () => {
  return (
    <>
    <div className="slider2">
    <div className="slider mt-4">
    <div id="carouselExampleFade" className="carousel slide carousel-fade w-100 h-100 " data-bs-ride="carousel">
  <div class="carousel-inner w-100 h-100">
    <div class="carousel-item active w-100 h-100">
      <img src="img/s4.jpg" class="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="font">
                  <h6 class="fw-bold">Up to 30% off</h6>
                  <h1>Let's make home happy</h1>
                  <button className="btn">VIEW COLLECTION</button>
                </div>
                </div>
    </div>
    <div class="carousel-item w-100 h-100">
      <img src="img/s2.jpg" class="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="font">
                  <h6 class="fw-bold">Up to 30% off</h6>
                  <h1>Let's make home happy</h1>
                  <button className="btn">VIEW COLLECTION</button>
                </div>
                </div>
    </div>
    <div class="carousel-item w-100 h-100">
      <img src="img/d4.jpg" class="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="font">
                  <h6 class="fw-bold">Up to 30% off</h6>
                  <h1>Let's make home happy</h1>
                  <button className="btn">VIEW COLLECTION</button>
                </div>
                </div>
    </div>
    <div class="carousel-item w-100 h-100">
      <img src="img/d5.jpg" class="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="font">
                  <h6 class="fw-bold">Up to 30% off</h6>
                  <h1>Let's make home happy</h1>
                  <button className="btn">VIEW COLLECTION</button>
                </div>
                </div>
    </div>
    <div class="carousel-item w-100 h-100">
      <img src="img/s3.jpg" class="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="font">
                  <h6 class="fw-bold">Up to 30% off</h6>
                  <h1>Let's make home happy</h1>
                  <button className="btn">VIEW COLLECTION</button>
                </div>
                </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    </>
  )
}

export default Slider