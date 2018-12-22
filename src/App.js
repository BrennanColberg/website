import React from 'react';
import Menu from './Menu.js';
import Projects from './Projects.js';
import introJSON from './assets/intro.json';

const App = () => (
  <div className="App">
    <h1 className="name">Brennan Colberg</h1>
    <Menu />
    <p>{introJSON}</p>
    <Projects />
  </div>
);

export default App;
