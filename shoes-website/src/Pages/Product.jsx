import React, { useEffect, useState } from 'react'
import "../Css/Product.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap//NavDropdown';

const Product = () => {

  const [products, setProducts]=useState([])
  const [filter, setFilter] = useState({
    men: false,
    women: false,
  });
  const [search, setSearch] = useState("")
  const [sortOption, setSortOption] = useState("");

  useEffect(()=>{

      axios(`http://localhost:8080/prodcut`)
      .then((res)=>{
        setProducts(res.data)
      })
  },[])

  console.log(products);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked
    });
  };

  let filteredData = products

     if(filter.men || filter.women){
      filteredData = filteredData.filter((el)=>{
      
        if(filter.men && el.category == "Men") {
         return true;
        }
        if(filter.women && el.category == "woman" ){
         return true;
        }
 
      })

     }

     if(search)
     {
      filteredData=filteredData.filter((el)=>{
        return el.name.toLowerCase().includes(search.toLowerCase()) 
      })
     }
    


     if(sortOption){
      filteredData = filteredData.sort((a,b)=>{
          if(sortOption == "asc"){
             return a.price - b.price;
          }else if(sortOption == "desc") {
              return b.price - a.price;
          }else if(sortOption == "atoz"){
              return b.name.localeCompare(a.name)
          }
       })
    }





  return (
    <>
     <div className="main-product-heading">
    <img src="img/bg3.webp"/>
    <h1>Products Page</h1>
  </div>

    <div className="chak-box">
      <div className="filter">
        <h5 className="mt-3">Filter:</h5>
        <input type="checkbox" name="men" onChange={handleFilterChange} className="mt-3" /><span className="ms-1 fs-5 fw-bold text-danger"> Men </span>
        <input type="checkbox" name="women" onChange={handleFilterChange}  className='ms-4'/><span className="ms-1 fs-5 fw-bold text-danger"> Women</span>
              </div>
      <div className="search">
      <InputGroup className=" w-75" style={{height:"45px"}}>
        <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" onChange={(e)=>setSearch(e.target.value)}/>
        <InputGroup.Text  id="basic-addon2" style={{backgroundColor:" #EB3E32", color:"white"}}><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
      </InputGroup>

      </div>
      <div className="sort">
        <h5 className="mt-3 ms-5">Sorting :</h5>
      <select name="" className="ms-5 mt-2" id="" onChange={(e)=>setSortOption(e.target.value)}>
              <option value="">Sort</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
              <option value="atoz">A to Z</option>
          </select>
      </div>
    </div>
  <div className="product-page">
    <div className="main-product-box">
      
        {
          filteredData.map((product)=>(
            <>
          
            <div className="product-boxs">
            <Link to={`/Product/${product.id}`} key={product.id}>
             <div className="product-img">
              <img src={product.image} />
             </div>
             </Link>
             <div className="product-item text-decoration-none">
              <h6 className="mt-3 ms-3 text-secondary text-decoration-none">{product.category}</h6>
              <h5 className="fw-bold ms-3 text-decoration-none">{product.name}</h5>
              <p className="fs-5 text-secondary ms-3 text-decoration-none">{product.price}</p>
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