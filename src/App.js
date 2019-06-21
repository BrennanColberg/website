import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from "./Home";
import Reading from "./Reading";

export default () => (
	<Router>
		<>
			<header>
				<Link to="/">BDC</Link>
				<Link to="/reading">Reading</Link>
			</header>
			<main>
				<Route exact path="/" component={Home} />
				<Route exact path="/reading" component={Reading} />
			</main>
			<footer>
				<span>&copy; Brennan Colberg 2019.</span>{" "}
				<span>All rights reserved.</span>
			</footer>
		</>
	</Router>
);
