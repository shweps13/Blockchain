import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

axios.get('http://localhost:5000/chain')
.then((response) => {
  console.log(response.data);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Adventures of Heorhii with Blockchain
        </p>
      </header>
      <div className="MainBody">
        <div className="LeftSide">

          <p>ololo</p>
        </div>
        <div className="RightSide">
          <p>ololo2</p>
        </div>
      </div>
    </div>
  );
}

export default App;
