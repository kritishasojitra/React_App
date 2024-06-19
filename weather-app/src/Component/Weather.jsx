import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'




const Weather = () => {

  const [data,setData] =useState("")
  const [weatherdata,setWeatherdata] = useState("")
  const key= "139000d69574ef7bf92c4e75a1f9477e"

  // console.log(data);


 async function fatchdata()
  {

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}`

    const fatch=await fetch(url)
    const alldata=await fatch.json()
    setWeatherdata(alldata)
    console.log(alldata);
  }
  function convertKelvinToCelsius(kelvin) {
    return Math.floor(kelvin - 273.15)
  }

  return (
    <>
    <div className="weather1">
    <div className="weather2">
      <h2 className="mt-3 fw-bold">Weather Appliction</h2>
    </div>
    <div className="weather3">
        <input type="text" placeholder="Enter City Name" onChange={(el)=>setData(el.target.value)}/>
        <button onClick={fatchdata}><i class="bi bi-search"></i></button>
    </div>
   
    {
      weatherdata && (
      <>
       <div className="weather4 shadow-lg mb-5  rounded">
        <div className="w1">
      <h3 className='mt-3'>{weatherdata.name}</h3>
      <h2 className='mt-2 fw-bold'>{convertKelvinToCelsius(weatherdata.main.temp)}°<img src="https://www.freeiconspng.com/uploads/clouds-png-22.png" width="180px" height="100px"></img></h2>
      </div>
      <div className='w2'>
      <i class="bi bi-wind"></i>
      <h5>{weatherdata.wind.speed}Km/h</h5>
      </div>
      <div className='w3'>
      <i class="bi bi-droplet-fill"></i>
      <h5>{weatherdata.main.humidity}%</h5>
      </div>
      </div>
      </>)
    }
    </div>
    

   
</>
  )
}

export default Weather



