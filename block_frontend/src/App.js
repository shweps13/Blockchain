import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Card, Button, Header, Icon, Form, Segment } from 'semantic-ui-react';
import ChainCard from './ChainCard'

function App() {

  const initialItem = {
    initialID: 'User'
  };

  const [chain, setChain] = useState([]);
  const [count, setCount] = useState(0);
  const [userID, setUserID] = useState("User");
  const [newuserID, setNewuserID] = useState(initialItem);
  const [coinBal, setCoinBal] = useState(0);
  let transactList = [];
  let transactFullList = [];



  let checkBal = userID => (
    transactList = [],
    // Take of all arrays with transactions in separate array
    chain.forEach(block => transactList.push(block.transactions)),
    // First array everytime will be with empty => remove it
    transactList.shift(),
    transactList.forEach(transactionArr => 
      transactionArr.forEach(transaction => transactFullList.push(transaction))),
    //Now we have array with transactions
    console.log("List of transactions: ", transactFullList)      
  )

  useEffect(() => {
    axios.get('http://localhost:5000/chain')
    .then((response) => {
      // console.log(response.data.chain);
      setChain(response.data.chain);
    });
    console.log("Chain: ", chain);
  }, [count]);

  const changeID = e => {
    console.log(`User ID was changed to: ${newuserID.initialID}`);
    setUserID(newuserID.initialID)
    };
 
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
          {chain.map(block => (
                    <ChainCard 
                    index={block.index} 
                    key={block.index}
                    previous_hash={block.previous_hash}
                    proof={block.proof}
                    timestamp={block.timestamp}
                    />
                ))}
          </Card.Group>
        </div>
        <div className="RightSide">
          <div className="TopHeader">
          <Header className="TopHeader" as='h2' floated='right'>
            <Icon name='settings' />
            <Header.Content>
              Account Settings
              <Header.Subheader>Manage your preferences</Header.Subheader>
            </Header.Content>
          </Header>
          </div >
          <div className="UserID">
            <Header as='h2' block>Your user ID is : {userID}</Header>
          </div>
          <div className="ChangeID">
          <Segment inverted>
            <Form inverted onSubmit={changeID}>
              <Form.Group widths='equal'>
                <Form.Input 
                  onChange={e =>
                    setNewuserID({ ...newuserID, initialID: e.target.value })
                }
                value={newuserID.initialID}
                fluid label='Change user ID' placeholder='New user ID' />
              </Form.Group>
              <Button type='submit' >Submit</Button>
            </Form>
          </Segment>
          </div>
          <div className="BalanceDiv">
            <Header as='h2' block>Your balane is:</Header>
            <Button onClick={() => checkBal(userID)}>Check balance</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
