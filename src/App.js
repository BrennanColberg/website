import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from "./Home";
import Books from "./Books";

export default () => (
	<Router>
		<>
			<header>
				<Link to="/">BDC</Link>
				<Link to="/books">Books</Link>
			</header>
			<main>
				<Route exact path="/" component={Home} />
				<Route path="/books" component={Books} />
			</main>
			<footer>
				<span>&copy; Brennan Colberg 2019.</span>{" "}
				<span>All rights reserved.</span>
			</footer>
		</>
	</Router>
);
