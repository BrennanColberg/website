import "./Reading.scss";

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Error404 from "../404";
import Splash from "./Splash";
import { loadPostRoutes } from "../Post";

import books from "./books.json";

export default () => {
	const [routes, setRoutes] = useState([]);

	// render routes for each post, once at creation of component
	useEffect(() => {
		loadPostRoutes(books, "./Reading/posts", "/reading").then(setRoutes);
	}, []);

	return (
		<Switch>
			<Route exact path="/reading" component={Splash} />
			{routes}
			<Route component={Error404} />
		</Switch>
	);
};
