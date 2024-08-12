import React, { useEffect, useState } from 'react';
import "../Css/Edit.css";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Fierbase/Fierbase';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    brand: '',
    category: '',
    price: '',
    ret: '',
    size: '',
    img: ''
  });

  const getData = async () => {
      const Data = doc(db, "product", id);
      const arr = await getDoc(Data);
    setProduct({ id: arr.id, ...arr.data() });
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const updatadata = doc(db, "product", id);
      await updateDoc(updatadata, product); 
      alert('Product updated successfully!');
      navigate('/home');
  };

  return (
    <div className="main-editbox">
      <div className="form-box">
        <h3 className='text-center fw-bold mt-2'>Edit Product</h3>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category"  name="category" value={product.category} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id="brand" name="brand" value={product.brand} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={product.title} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number"name="price" value={product.price} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <input type="text" id="size"  name="size" value={product.size} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="ret">RET</label>
                    <input type="text" id="ret"name="ret"  value={product.ret} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="ret">Image</label>
                    <input type="url" id="ret" name="img" value={product.img} onChange={handleChange} />
                </div>

                <button type="submit" className="submit-btn">Update</button>
            </form>
            </div>
      </div>
      <div className="product-box shadow-lg p-1 bg-body rounded">
      <img src={product.img} alt={product.title} />
        <h6 className="mt-3 ms-5">TITLE : {product.title}</h6>
        <p className="ms-5">BRAND : {product.brand}</p>
      <p className="ms-5">CATEGORY : {product.category}</p>
      <p className="ms-5">PRICE : {product.price}</p>
      <p className="ms-5">RET : {product.ret}</p>
      <p className="ms-5">SIZE : {product.size}</p>
      </div>
    </div>
  );
};

export default Edit;
