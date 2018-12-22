import React, { Component } from 'react';
import Menu from './Menu.js';
import Intro from './Intro.js';
import Projects from './Projects.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="name">Brennan Colberg</h1>
        <Menu />
        <Intro />
        <Projects />
      </div>
    );
  }
}

export default App;
