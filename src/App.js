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
        {this.state.pictures.map(picture => (
          <Card
            id={picture.id}
            key={picture.id}
            name={picture.name}
            image={picture.image}
          />
        ))}
        <text>TESTESTESTESTEST</text>
      </div>
    );
  }
}

export default App;
