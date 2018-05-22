import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    const ButtonExampleButton = () => (
      <Button>Click Here</Button>
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Hello</h1>
          <h2 style={{color:"red"}}>From develop branch with App.json</h2>
        </header>
        <p className="App-intro">
          {ButtonExampleButton()}
        </p>
      </div>
    );
  }
}

export default App;
