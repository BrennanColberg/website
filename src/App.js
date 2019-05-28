import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";

import Home from "./Home";
import Books from "./Books";

export default () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={Books} />
    </>
  </Router>
);
