import React from 'react'
import {Route,  Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Product from "../Pages/Product"
import Login from '../Pages/Login'
import Singup  from '../Pages/Singup'
import Privateroute from '../Component/Privateroute'
import Singlpage from '../Pages/Singlpage'
  



const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Product" element={<Privateroute><Product/></Privateroute>}></Route>
        <Route path="/Product/:id" element={<Singlpage/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Singup" element={<Singup/>}></Route>
    </Routes>
    </>
  )
}

export default MainRouter