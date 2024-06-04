import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  const handleVoteA = () => {
    setVotesA(votesA + 1);
  };

  const handleVoteB = () => {
    setVotesB(votesB + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voting App</h1>
        <div className="vote-container">
          <div className="option">
            <img src="b1.jpg"></img>
            <button onClick={handleVoteA}>Vote for Bhajp</button>
            <p>Votes: {votesA}</p>
          </div>
          <div className="option">
          <img src="con.jpg"></img>
            <button onClick={handleVoteB}>Vote for Congress</button>
            <p>Votes: {votesB}</p>
          </div>
        </div>
      </header>
    </div>
  );
}



export default App;
