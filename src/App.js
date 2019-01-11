import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Card from "./components/Card";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures
  };

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        
      </div>
    );
  }
}

export default App;
