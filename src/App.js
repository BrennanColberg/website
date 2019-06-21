import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from "./Home";
import Books from "./Books";

export default () => (
	<Router>
		<>
			<header>
				<h3>
					<Link to="/">BDC</Link>
				</h3>
				<Link to="/books">Books</Link>
			</header>
			<main>
				<Route exact path="/" component={Home} />
				<Route path="/books" component={Books} />
			</main>
			<footer>&copy; Brennan Colberg 2019. All rights reserved.</footer>
		</>
	</Router>
);
