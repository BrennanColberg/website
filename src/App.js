import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Reading from "./Reading";
import Writing from "./Writing";
import Error404 from "./404";

export default () => (
	<Router>
		<>
			<header>
				<Link to="/">BDC</Link>
				<Link to="/reading">Reading</Link>
				<Link to="/writing">Writing</Link>
			</header>
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/reading" component={Reading} />
					<Route path="/writing" component={Writing} />
					<Route component={Error404} />
				</Switch>
			</main>
			<footer>
				<span>&copy; Brennan Colberg 2019.</span>{" "}
				<span>All rights reserved.</span>
			</footer>
		</>
	</Router>
);
