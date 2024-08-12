import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import ProductFrom from '../Page/ProductFrom'
import Product from '../Page/Product'
import Edit from '../Page/Edit'
import Home from '../Page/Home'

const Mainrouter = () => {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/productform" element={<ProductFrom/>}></Route>
        <Route path="/product-add" element={<Product/>}></Route>
        <Route path="/product-add/:id" element={<Edit/>}></Route>
    </Routes>
    </>
  )
}

export default Mainrouter