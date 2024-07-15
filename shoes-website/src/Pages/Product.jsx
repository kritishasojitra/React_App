import React, { useEffect, useState } from 'react'
import "../Css/Product.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {

  const [arr,setArr]=useState([])

  useEffect(()=>{

      axios(`http://localhost:8080/prodcut`)
      .then((res)=>{
          setArr(res.data)
      })
  },[])

  console.log(arr);





  return (
    <>
     <div className="main-product-heading">
    <img src="img/bg3.webp"/>
    <h1>Products Page</h1>
  </div>

  <div className="product-page">
    <div className="main-product-box">
      
        {
          arr.map((el)=>(
            <>
          
            <div className="product-boxs">
            <Link to={`/Product/${el.id}`} key={el.id}>
             <div className="product-img">
              <img src={el.image} />
             </div>
             </Link>
             <div className="product-item text-decoration-none">
              <h6 className="mt-3 ms-3 text-secondary text-decoration-none">{el.category}</h6>
              <h5 className="fw-bold ms-3 text-decoration-none">{el.name}</h5>
              <p className="fs-5 text-secondary ms-3 text-decoration-none">{el.price}</p>
             </div>
             </div>
            
            </>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Product