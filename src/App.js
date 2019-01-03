import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Book from './Book.js';
import Project from './Project.js';
import BlogPost from './BlogPost.js';

const App = () => (
  <Router>
    <div className="App">
      <Link to="/"><h1>Brennan Colberg</h1></Link>
      <Route exact path="/" component={Home} />
      <Route path="/books/:name" component={Book} />
      <Route path="/projects/:name" component={Project} />
      <Route path="/blog/:name" component={BlogPost} />
    </div>
  </Router>
);

export default App;
