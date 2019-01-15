import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Article from './Article.js';

const App = () => (
  <Router>
    <div className="App">

      <Link to="/"><h1>Brennan Colberg</h1></Link>

      <Route exact path="/" component={Home} />
      <Route
        path="/:folder(blog|books|projects)/:name"
        component={Article} 
      />
      
    </div>
  </Router>
);

export default App;
