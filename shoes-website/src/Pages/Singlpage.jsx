import React, { useEffect, useState } from 'react';
import "../Css/Singlepage.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglPage = () => {
  const { id } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/prodcut/${id}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>

      <div className="page1">
        <div className="product-hed">
          <h1 className="text-center mt-4 text-danger"><u>Product Details</u></h1>
        </div>
        <div className='product-image'>
          <div className='img1'>
     <img src={state.image}/>
          </div>
          <div className='img2'>
            <div className='i2'>
            <img src={state.image}/>
            </div>
            <div className='i1'>
              <img src="https://htmldemo.net/shome/shome/assets/img/shop/product-single/nav-1.webp"/>
            </div>
            <div className='i1'>
              <img src="https://htmldemo.net/shome/shome/assets/img/shop/product-single/nav-3.webp"/>
            </div>
            <div className='i1'>
            <img src="https://htmldemo.net/shome/shome/assets/img/shop/product-single/nav-4.webp"/>
            </div>
          </div>
        </div>
        <div className='product-del'>
              <h1 className=" ms-3 text-decoration-none">{state.name}</h1>
              <h3 className="ms-3 fs-bold mt-3">{state.price}</h3>
              <i className="fa-solid fa-star ms-3 mt-3 text-warning"></i>
              <i className="fa-solid fa-star ms-2 text-warning"></i>
              <i className="fa-solid fa-star ms-2 text-warning"></i>
              <i className="fa-solid fa-star ms-2 text-warning"></i>
              <i className="fa-solid fa-star ms-2 text-warning"></i>
            <span className="ms-3 fs-5 text-secondary">( 5 Customer Review )</span><br/><br/><hr/>
            <p className="fs-5 mt-5">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco</p>
            <p className="mt-5">Buy this bundle and get off to <span className="fw-bold text-danger">25%</span> of all prices.</p>
            <div className="add2">
            <div className="add1">
                <div className="a1">
                  <h4>+</h4>
                </div><h3 className="">1</h3>
                <div className="a1">
                  <h2>-</h2>
                </div>
            </div>
            <div>
            <button className="button-add">Add To Cart</button>
            </div>
            </div>
            <i className="fa-regular fa-heart fs-3 text-danger mt-4 ms-3"></i>
            <span className="ms-2 fs-4 ">Add to Wishlist</span>
        </div>
      </div>
    </>
  );
};

export default SinglPage;
