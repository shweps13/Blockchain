import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Card, Button } from 'semantic-ui-react';
import ChainCard from './ChainCard'

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
          <Card.Group centered>
            <ChainCard/>
            <ChainCard/>
            <ChainCard/>
            <ChainCard/>
          </Card.Group>
        </div>
        <div className="RightSide">
          <p>ololo2</p>
        </div>
      </div>
    </div>
  );
}

export default App;
