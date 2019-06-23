import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./Routes/Home";
import FAQ from "./Routes/FAQ";
import Idiosyncracies from "./Routes/Idiosyncracies";
import Reading from "./Routes/Reading";
import Writing from "./Routes/Writing";
import Error404 from "./Routes/404";

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
					<Route exact path="/faq" component={FAQ} />
					<Route exact path="/idiosyncracies" component={Idiosyncracies} />
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
