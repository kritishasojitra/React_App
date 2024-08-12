import React, { useState } from 'react'
import "../Css/Form.css"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Fierbase/Fierbase'

const ProductFrom = () => {

    const [cet,setCet]=useState("")
    const [brand,setBrand]=useState("")
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [size,setSize]=useState("")
    const [ret,setRet]=useState("")
    const [img,setImg]=useState("")


    const productcollection = collection(db,"product")

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const obj = {
            category: cet,
            brand: brand,
            title: title,
            price: price,
            size: size,
            ret: ret,
            img:img
        }

       await addDoc(productcollection,obj)
       alert("Product added successfully.....")
       


        setCet("")
        setBrand("")
        setTitle("")
        setTitle("")
        setSize("")
        setRet("")
        setPrice("")
        setImg("")
    }

  return (
    <div>
         <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" value={cet} name="category" onChange={(e) => setCet(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id="brand" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <input type="text" id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="ret">RET</label>
                    <input type="text" id="ret" name="ret" value={ret} onChange={(e) => setRet(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="ret">Image</label>
                    <input type="url" id="ret" name="img" value={img} onChange={(e) => setImg(e.target.value)} required />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default ProductFrom