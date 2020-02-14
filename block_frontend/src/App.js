import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [chain, setChain] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    axios.get('http://localhost:5000/chain')
    .then((response) => {
      // console.log(response.data.chain);
      setChain(response.data.chain);
    });
    console.log(chain);
  }, [count]);

 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Adventures of Heorhii with Blockchain
        </p>
      </header>
      <div className="MainBody">
        <div className="LeftSide">
          <button className="RefreshBtn" onClick={() => setCount(count + 1)}>
          Update chain
          </button>
        </div>
        <div className="RightSide">
          <p>ololo2</p>
        </div>
      </div>
    </div>
  );
}

export default App;
