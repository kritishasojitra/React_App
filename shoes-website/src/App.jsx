
import './App.css';
import MainRouter from './Router/MainRouter';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainRouter/>
      <Footer/>
    </div>
  );
}

export default App;
