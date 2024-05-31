import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="i4.jpg"></img>
     <div className="game1">
      <div className="logo">
        <img src="logo.png"></img>
      </div>
      <nav>
        <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">TOURNAMENT</a></li>
        <li><a href="">PAGE</a></li>
        <li><a href="">NEWS</a></li>
        <li><a href="">CONTACT</a></li>
        </ul>
      </nav>
      <button className="btn">SING IN</button>
     </div>

     <div className="game2">
      <div className="g2">
        <h3>LIVE GAMING</h3>
        <h1>STEAMING</h1>
        <h2>VIDEO GAMES ONLINE</h2>
        <button className="btn1">CONTACT US</button>
      </div>
      <div className="g1">
        <img src="i1.png" className="img1"></img>
      </div>
     </div>
     <div className="game3"></div>

     <div className="App1">
      <div className="game4">
        <div className="g3">
          <div className="ga1">
            <img src="i2.jpg"></img>
          </div>
          <div className="ga2">
          <h3>WOLF GAMING ART</h3>
            <h5>Alax Max / CREATOR</h5>
            <button>Bid</button>
          </div>
        </div>
        <div className="g3">
          <div className="ga1">
            <img src="i5.jpg"></img>
          </div>
          <div className="ga2">
          <h3>FOREST PRINCESS</h3>
            <h5>Alax Max / CREATOR</h5>
            <button>Bid</button>
          </div>
        </div>
        <div className="g3">
          <div className="ga1">
            <img src="i3.jpg">
            </img>
          </div>
          <div className="ga2">
          <h3>GIRL FIREFLY ART</h3>
            <h5>Alax Max / CREATOR</h5>
            <button>Bid</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
