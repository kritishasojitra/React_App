import React from 'react'
import "../Css/Home.css"
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);
const Home = () => {

  const data = {
    labels: Array.from({ length: 100 }, (_, i) => i / 10),
    datasets: [
      {
        label: 'sin(x)',
        data: Array.from({ length: 100 }, (_, i) => Math.sin(i / 10)),
        borderColor: '#e74c3c',
        fill: false,
      },
      {
        label: 'cos(x)',
        data: Array.from({ length: 100 }, (_, i) => Math.cos(i / 10)),
        borderColor: '#3498db',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'x',
        },
      },
      y: {
        title: {
          display: true,
          text: 'y',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };




  return (
    <>
    <div className="home1">
    <div className="dashboard-container">
      <div className="nav-buttons">
        <button className="nav-button">Dashboard</button>
        <button className="nav-button">Charts</button>
        <button className="nav-button">Widgets</button>
        <button className="nav-button">Tables</button>
        <button className="nav-button">Full Width</button>
        <button className="nav-button">Forms</button>
        <button className="nav-button">Buttons</button>
        <button className="nav-button">Elements</button>
        <button className="nav-button">Calendar</button>
        <button className="nav-button">Errors</button>
      </div>

      <div className="site-analysis">
        <h2 className="mt-5">Site Analysis</h2>
        <p>Overview of Latest Month</p>
        <div className="chart">
        <div className="chart-container">
      <Line data={data} options={options} />
    </div>
        </div>
      </div>

      
    </div>
    </div>
    </>
  )
}

export default Home