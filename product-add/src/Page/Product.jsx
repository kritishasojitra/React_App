import React, { useEffect, useState } from 'react'
import "../Css/Product.css"
import { collection, getDocs ,deleteDoc, doc } from 'firebase/firestore'
import { db } from '../Fierbase/Fierbase'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'

const Product = () => {

  const [data,setData]=useState([])
  
  const productcollection = collection(db,"product")

  const getData=async()=>{

    let Data= await getDocs(productcollection)
    let arr= Data.docs.map((el)=>{
      return {id:el.id, ...el.data()}
    })
    setData(arr)  
  }

  useEffect(()=>{
    getData();
  },[])


  const handleDelete = async(id)=>{
    const Data =doc(db,"product",id)

    await deleteDoc(Data);
    alert("data delete....")
    getData()
  }




  return (
    <>
    <div className="main-product">
   {
  data.map((el) => (
    <div className="product-1 shadow-lg p-1 bg-body rounded" key={el.id}>
      <img src={el.img}/>
      <h5 className="ms-4 mt-3">Title : {el.title}</h5>
      <p className="ms-4">Price : {el.price}</p>
      <button className="btn1" onClick={()=>handleDelete(el.id)}><i class="bi bi-trash3"></i></button>
      <button className='btn2' ><Link to={`/product-add/${el.id}`}  className="text-light"><i class="bi bi-pencil-square"></i></Link></button>
    </div>
  ))
}
</div>
</>
  )
}

export default Product