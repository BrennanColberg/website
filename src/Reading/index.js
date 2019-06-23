import "./Reading.scss";

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { loadPostRoutes } from "../Post";
import Error404 from "../404";
import Splash from "./Splash";

export default () => {
	const [routes, setRoutes] = useState([]);

	// render routes for each post, once at creation of component
	useEffect(() => {
		loadPostRoutes("reading").then(setRoutes);
	}, []);

	return (
		<Switch>
			<Route exact path="/reading" component={Splash} />
			{routes}
			<Route component={Error404} />
		</Switch>
	);
};
