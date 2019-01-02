import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Book from './Book.js';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book/">book</Link>
      </nav>
      <h1>Brennan Colberg</h1>
      <Route exact path="/" component={Home} />
      <Route path="/book/:book" component={Book} />
    </div>
  </Router>
);

export default App;
