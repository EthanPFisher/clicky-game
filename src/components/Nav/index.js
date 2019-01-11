import React, { Component } from 'react'

export default class Nav extends Component {
    state = {
        open: false,
        width: window.innerWidth,
        score: 0,
        highScore: 0
      };
    
      updateWidth = () => {
        const newState = { width: window.innerWidth };
    
        if (this.state.open && newState.width > 991) {
          newState.open = false;
        }
    
        this.setState(newState);
      };
    
      toggleNav = () => {
        this.setState({ open: !this.state.open });
      };
    
      componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
      }
    
      componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
      }
    
      render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <h1>Clicky Game</h1>
            <button
              onClick={this.toggleNav}
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <h2>Current Score: { this.state.score } |</h2>
                </li>
                <li className="nav-item">
                    <h2>| High Score: { this.state.highScore }</h2>
                </li>
              </ul>
            </div>
          </nav>
        );
      }
}
