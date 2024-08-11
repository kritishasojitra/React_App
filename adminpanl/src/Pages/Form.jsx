import React, { useState } from 'react';
import "../css/Form.css";
import { db } from '../firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Form = () => {

  const [brand,setBrand] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [des,setDes] = useState("");
  const [img ,setImg] = useState("");

  const productCollection = collection(db,"product");

  const handlesubmit = async(e) => {
    e.preventDefault();

    let obj = {
      brand: brand,
      name: name,
      price: price,
      des: des,
      img: img
    };

    let a = await addDoc(productCollection, obj);
    Swal.fire(
      'Product Added!',
      'Your product has been added successfully.',
      'success'
    );

    console.log(a.id);

    setBrand("");
    setPrice("");
    setDes("");
    setImg("");
    setName("");
  }

  return (
    <>
      <div className="form1">
        <div className="heading">
          <h2 className="text-center mt-3 text-success fw-bold">Product Add </h2>
        </div>
        <form className="row g-3 p-4" onSubmit={handlesubmit}>
          <div className="col-md-12">
            <label className="form-label text-success  fs-5 ms-2">Product Brand Name</label>
            <input type="text" name="brand" value={brand} className="form-control border border-success" id="inputEmail4" onChange={(e) => setBrand(e.target.value)}/>
          </div>
          <div className="col-md-12">
            <label className="form-label text-success  fs-5 ms-2 mt-2">Product Name</label>
            <input type="text" name="name" value={name} className="form-control border border-success" id="inputPassword4" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="col-12">
            <label className="form-label text-success mt-2 fs-5 ms-2">Price</label>
            <input type="text" name="price" value={price} className="form-control border border-success" id="inputAddress" onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <div className="col-12">
            <label className="form-label text-success mt-2 fs-5 ms-2"> Description</label>
            <input type="text" name="des" value={des} className="form-control border border-success" id="inputAddress" onChange={(e) => setDes(e.target.value)}/>
          </div>
          <div className="col-md-12">
            <label className="form-label text-success mt-2 fs-5 ms-2">Image</label>
            <input type="url" name="img" value={img} className="form-control border border-success" id="inputCity" onChange={(e) => setImg(e.target.value)}/>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-50 mt-2" style={{marginLeft:"130px"}}>Product Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
