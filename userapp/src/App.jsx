import logo from './logo.svg';
import './App.css';
import Userapi from './Component/Userapi';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

    const [state,setState] =useState(false)
    const [arr,setArr] = useState([])


  const fetchData=()=>{
    setState(true);
    axios('https://randomuser.me/api/')
    .then((res)=>{
      setArr(res.data.results)
      setState(false);
    })
}
  
  useEffect(()=>{
    fetchData();
  },[])
    console.log(arr);

  return (
    <div className="App">
      <div className="aip2">
        <h2 className="mt-5 fw-bold">Random user</h2>
        <button className="btn mt-4 btn-success fw-bold" onClick={fetchData}>Fatch New User</button>
      </div>
      {
        state == true ? <div>
         <div class="spinner">
    <div class="spinnerin"></div>
    </div>
        </div> :  <Userapi arr={arr}/>
      }
    </div>
  );
}

export default App;
